<template>  
<v-layout relative>

  <v-card width="100%">
    <v-list subheader>
      <v-subheader >热门</v-subheader>
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


  <!-- <v-navigation-drawer
    v-model="drawer"
    class="pb-0"
    hide-overlay
    stateless
    width="64"
    temporary
    right
    fixed
    height="310"
    style="top:104px"
  >
    <v-layout >
      <v-list class="grow">
        <v-list-tile
          v-for="(tag, index) in tags"
          :key="index"
        >
          <v-list-tile-title v-text="tag.name"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer> -->

</v-layout>
</template>

<script>

import axios from "axios"
// 本地存储
import storage from '../../model/storage';

export default {
  name: 'artist',
  data() {
    return {
      drawer: true,
      artists: {},
      tags: {},
    }
  },
  methods:{
    cartView() {
      // console.log(this.text)
    }
  },
  created () {
    // 判断本地localStorage 是否存在artists
    if (localStorage.getItem("artists") != null) {
      // console.log(storage.get('artists'))
      this.artists = storage.get('artists')
    } else {
      // 获取歌手
      axios.get('http://localhost:3000/toplist/artist')
      .then((data) => {
        // console.log(data.data);
        this.artists = data.data.list.artists
        // 保存数据
        storage.set('artists', this.artists);
      })
      .catch( (error) => {
        console.log(error);
      });
    }

      
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
