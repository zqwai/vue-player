<template>
<section relative>
  <v-card width="100%">
    <v-list subheader>
      <v-subheader >{{title}}</v-subheader>
      <v-list-tile
        v-for="(artist, index) in artists"
        :key="index"
        avatar
      >
        <v-list-tile-avatar>
          <img :src="artist.img1v1Url">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{artist.name}}
          </v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
  </v-card>

</section>
</template>

<script>
// api
import { getArtistList } from '@/api/index'
// data
import { dataArtistMenus } from '@/data/db_app'

export default {
  name: 'artist',
  data () {
    return {
      artists: {},
      title: ''
    }
  },
  methods: {
    //
  },
  created () {
    // 获取歌手分类名
    for (let i = 0; i < dataArtistMenus.length; i++) {
      if (this.$route.params.id === dataArtistMenus[i].uid) {
        this.title = dataArtistMenus[i].text
      }
    }
    // 获取歌手
    getArtistList(this.$route.params.id)
      .then((data) => {
        this.artists = data.data.artists
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style lang="stylus" scoped>
.v-btn--floating.v-btn--small
  width 1.52rem
  height 1.52rem
  text-align center
  .v-icon
    font-size .76rem
</style>
