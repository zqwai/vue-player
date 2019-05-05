<template>
  <section>
    <Vheader
    :sideNavBars="sideNavBars"
    />
    <!-- carousel -->
    <v-carousel
      height="128"
    >
      <v-carousel-item
        v-for="(item, i) in banners"
        :key="i"
        :src="item.imageUrl"
        :title="item.typeTitle"
        :data-url="item.url"
      >
      </v-carousel-item>
    </v-carousel>
    <!-- /carousel -->

    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-card-title class="pt-0 pb-1 pl-0 pr-0">
            <span class="grey--text">精品歌单</span>
          </v-card-title>
          <v-flex
            v-for="item in playlists"
            :key="item.userId"
            d-flex
            v-bind="{ [`xs${item.flex}`]: true }"
          >
            <v-card>
              <v-img
                :src="item.coverImgUrl"
              >
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span
                      class="headline white--text titlebg"
                      v-text="`${item.creator.nickname.substr(0, 14)}`"
                      ></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title class="v-title">
                {{`${item.name.substr(0, 14)}`}}
              </v-card-title>
              <v-card-actions
              class="icon-group-wrap"
              >
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>playlist_add</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>play_arrow</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-card class="mt-2">
      <v-container
        fluid
        grid-list-md
      >
      <v-card-title
        class="pt-0 pb-1 pl-0 pr-0">
          <span class="grey--text">热门歌单</span>
        </v-card-title>
        <v-layout row wrap>

          <v-flex
            v-for="item in personalized"
            :key="item.id"
            d-flex
            xs6
          >
            <v-card>
              <v-img
                :src="item.picUrl"
              >
                <v-layout
                fill-height
                align-content-center
                justify-center
                class="align-center">
                  <v-btn icon class="icon-wrap">
                    <v-icon>play_arrow</v-icon>
                  </v-btn>
                </v-layout>
              </v-img>
              <v-card-title class="v-title">
                {{`${item.name.substr(0, 14)}`}}
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <Vfooter />

    <VGoTop
    :btnGoToColor="btnGoToColor"
    />
  </section>
</template>

<script>
// @ is an alias to /src
import Vheader from '@/components/public/Vheader'
import Vfooter from '@/components/public/Vfooter'
import VGoTop from '@/components/public/VGoTop'

// api
import { getBanner, getRelatedPlaylist, getPersonalized } from '@/api/'
// 本地存储
import storage from '@/model/storage'
// app data
import { dataBottomNavBars } from '@/data/db_app'

export default {
  name: 'home',
  components: {
    Vheader,
    Vfooter,
    VGoTop
  },
  data () {
    return {
      sideNavBars: [],
      banners: [],
      playlists: [],
      personalized: [],
      btnGoToColor: 'red',
      texta: {}
    }
  },
  methods: {
  },
  created () {
    // 底部导航
    this.sideNavBars = dataBottomNavBars
    // console.log(dataBottomNavBars)

    // banners
    // 判断本地localStorage 是否存在 banners
    if (localStorage.getItem('banners') != null) {
      this.banners = storage.get('banners')
      // console.log(this.banners)
    } else {
      getBanner().then((res) => {
        if (res.status === 200) {
          // console.log(`加载成功，status：${res.status}`)
          console.log(res.data)
          this.banners = res.data.banners
          // storage.set('banners', res.data.banners)
          // console.log(storage.get('banners'))
          // this.banners = storage.get('banners')
        } else {
          alert(`加载超时，status：${res.status}`)
        }
      }).catch((error) => {
        alert(error)
      })
    }

    // 判断本地localStorage 是否存在 personalized
    if (localStorage.getItem('personalized') != null) {
      // console.log(storage.get('personalized'))
      this.personalized = storage.get('personalized')
    } else {
      getPersonalized(10).then((res) => {
        if (res.status === 200) {
          // console.log(`加载成功，status：${res.status}`)
          // console.log(res.data)
          // this.personalized = res.data.result
          // console.log(this.personalized)
          storage.set('personalized', res.data.result)
          this.personalized = storage.get('personalized')
        } else {
          console.log(`加载失败，status：${res.status}`)
        }
      })
    }

    // 判断本地localStorage 是否存在 playlists
    if (localStorage.getItem('playlists') != null) {
      // console.log(storage.get('playlists'))
      this.playlists = storage.get('playlists')
    } else {
      // 相关歌单推荐
      getRelatedPlaylist(1).then((res) => {
        if (res.status === 200) {
          // console.log(res.data.playlists)
          // 添加flex布局 参数flex
          for (var i = 0; i < res.data.playlists.length; i++) {
            // console.log(i + ':' + res.data.playlists[i])
            if (res.data.playlists.length / 2 > 0) {
              if (i === 0) {
                res.data.playlists[0].flex = '12'
              } else {
                res.data.playlists[i].flex = '6'
              }
              // console.log(res.data.playlists)
              storage.set('playlists', res.data.playlists)
              this.playlists = storage.get('playlists')
            } else {
              res.data.playlists[i].flex = '6'
              // console.log(res.data.playlists)
              storage.set('playlists', res.data.playlists)
              this.playlists = storage.get('playlists')
            }
          }
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
  },
  updated () {
    // this.showScrollButton
  },
  computed: {

  }
}
</script>

<style lang="stylus" scoped>
.titlebg
  display inline-block
  word-break break-all
  word-wrap break-word
  background-color rgba(0,0,0,.6)
  padding .2rem
  font-size .76rem !important
.v-title
  word-break break-all
  word-wrap break-word
  padding .5rem
  height 4.2rem
.icon-group-wrap
  padding 0 .5rem .5rem
  .v-icon
    font-size 1.2rem
.icon-wrap
  background-color rgba(0,0,0,.4)
</style>
