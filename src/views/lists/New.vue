<template>

  <v-card>
    <v-container
      fluid
      grid-list-lg
      :class="showPlayPaddingBottm ? 'pb_60' : '' "
    >
      <v-layout row wrap>

        <v-flex xs12
        v-for="(item, index) in topsonglists"
        :key="index"
        class="v-list-wrap"
        >
          <v-card class="white--text">

            <v-img
              :src="item.picUrl"
              class="bg-picUrl"
              contain
            >
              <v-flex xs12 fill-height class="bg-black-op-5">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{item.name}}</div>
                    <div :data-albumId='item.albumId'>专辑：
                      《{{item.albumName}}》
                    </div>
                    <div>歌手：{{ item.artistsName }}</div>
                  </div>
                </v-card-title>

                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <v-btn small outline
                  :to='`/detil/${item.id}`'
                  >
                    查看明细
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-icon
                  outline
                  ref='item'
                  @click="songPlay(index)"
                  :data-mp3Url="item.mp3Url"
                  >play_arrow</v-icon>
                </v-card-actions>
              </v-flex>
            </v-img>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-card>

</template>

<script>
// api
import { getTopSong, getSongUrl, getLyric } from '@/api/index'
// 本地存储
import storage from '@/model/storage'
// vuex
import store from '@/store/'
// import { timeStamp2String } from '@/model/comm'

export default {
  name: 'list',
  components: {
  },
  store,
  data: () => ({
    topsonglists: [],
    showPlayPaddingBottm: '',
    pageItems: 4
  }),
  methods: {
    // 点击列表播放按钮
    songPlay (index) {
      this.showPlayPaddingBottm = 'pb_60'
      // 获取歌曲链接
      getSongUrl(this.topsonglists[index].id).then((data) => {
        if (data.status === 200) {
          // console.log(data)
          this.topsonglists[index].mp3Url = data.data.data[0].url
        }
      })
      // 获取歌词
      getLyric(this.topsonglists[index].id).then((data) => {
        if (data.status === 200) {
          // console.log(data)
          this.topsonglists[index].lyric = data.data.lrc.lyric
        }
      })
      this.$store.commit('pushSongData', this.topsonglists[index])
    },

    _getTopSong (pageItems) {
      if (localStorage.getItem('topsonglists') != null) {
        this.topsonglists = storage.get('topsonglists')
        // .slice(1, 5)
        console.log(this.topsonglists)
      } else {
        getTopSong('0', '10').then((res) => {
          if (res.status === 200) {
            console.log(res)
            // if(res.data.data.length > 10 )
            let topsong = res.data.data.slice(1, pageItems)
            // console.log(topsong)
            // 重组单曲数组
            topsong.forEach((el) => {
              let newArr = {
                id: el.id,
                mp3Url: '',
                name: el.name,
                // 相册
                albumId: el.album.id,
                albumName: el.album.name,
                albumCompany: el.album.company,
                picUrl: el.album.blurPicUrl,
                // 歌手
                artistsId: el.artists[0].id,
                artistsName: el.artists[0].name,
                // 歌曲信息
                musicId: el.bMusic.id,
                playTime: el.bMusic.playTime,
                extension: el.bMusic.extension,
                bitrate: el.bMusic.bitrate,
                // 歌词
                lyric: ''
              }
              this.topsonglists.push(newArr)
            })
            // this.topsonglists = res.data
          } else {
            console.log(`data loading failed, err status: ${res.status}.`)
          }
          // console.log(this.topsonglists)
          // storage.set('topsonglists', this.topsonglists)
        })
      }
    },

    loadingMore () {
      this.$vuetify.goTo(0)
    }

    // onScroll () {
    //   // console.log('scroll')
    //   // 可滚动容器的高度
    //   let innerHeight = document.querySelector('#app').clientHeight
    //   // 屏幕尺寸高度
    //   let outerHeight = document.documentElement.clientHeight
    //   // 可滚动容器超出当前窗口显示范围的高度
    //   let scrollTop = document.documentElement.scrollTop
    //   // scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，
    //   // 出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
    //   // console.log(`
    //   //   可滚动容器的高度:${innerHeight},
    //   //   屏幕尺寸高度:${outerHeight},
    //   //   滚动时高度:${scrollTop}
    //   // `)
    //   if (innerHeight < (outerHeight + scrollTop)) {
    //     // 加载更多操作
    //     // console.log('loadmore')
    //     this.pageItems += 10
    //     console.log('<' + this.pageItems)
    //   } else if (innerHeight === (outerHeight + scrollTop)) {
    //     this.pageItems += 10
    //     console.log('=' + this.pageItems)
    //   }
    // }
  },
  created () {
    this._getTopSong(this.pageItems)
    // window.addEventListener('scroll', this.onScroll)
  },
  mounted () {
    //
  },
  updated () {
    if (this.pageItems > 10) {
      this._getTopSong(this.pageItems)
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-list-wrap
  .v-card__title
    min-height 70%
.bg-black-op-5
  background-color rgba(0,0,0,.5)
.pb_60
  padding-bottom 80px
</style>
