<template>

  <v-card>
    <v-container
      fluid
      grid-list-lg
      :class="showPlayPaddingBottm ? 'pb_60' : '' "
    >
      <v-layout row wrap>

        <v-flex xs12
        v-for="(item, index) in playlists"
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
    playlists: [],
    showPlayPaddingBottm: ''
  }),
  methods: {
    songPlay (index) {
      this.$store.commit('pushSongData', this.playlists[index])
      this.showPlayPaddingBottm = 'pb_60'
    },

    _getTopSong () {
      if (localStorage.getItem('playlists') != null) {
        this.playlists = storage.get('playlists')
        // .slice(1, 5)
        console.log(this.playlists)
      } else {
        getTopSong('0', '10').then((res) => {
          if (res.status === 200) {
            // if(res.data.data.length > 10 )
            // storage.set('topsong', res.data.data)
            let topsong = res.data.data.slice(1, 5)
            // console.log(topsong)
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
              getSongUrl(el.id).then((data) => {
                if (data.status === 200) {
                  // console.log(data)
                  newArr.mp3Url = data.data.data[0].url
                }
              })
              getLyric(el.id).then((data) => {
                if (data.status === 200) {
                  // console.log(data)
                  newArr.lyric = data.data.lrc.lyric
                }
              })
              this.playlists.push(newArr)
            })
            // this.playlists = res.data
            console.log(this.playlists)
            // storage.set('playlists', this.playlists)
          } else {
            console.log(`data loading failed, err status: ${res.status}.`)
          }
        })
      }
    }
  },
  created () {
    this._getTopSong()
  },
  mounted () {
    //
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
