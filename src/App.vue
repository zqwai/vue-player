<template>
  <v-app
    dark
  >
  <v-layout justify-center>
    <v-flex xs12>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-flex>

    <VBottomNav
      :bottomNavBars = 'bottomNavBars'
    />

    <v-player
      :song="this.$store.state.song"
      :ended="audioFinish"
      v-if="this.$store.state.showPlayer"
    >
    </v-player>
    <v-player-detail
      v-show="this.$store.state.showPlayerDetail"
    ></v-player-detail>

  </v-layout>
  </v-app>
</template>

<script>
import VBottomNav from '@/components/public/VBottomNav'
import VPlayer from '@/components/player/Player'
import VPlayerDetail from '@/components/player/PlayerDetail'
// axios
// import axios from 'axios'
// 本地存储
// import storage from '@/model/storage'
// app data
import { dataBottomNavBars } from '@/data/db_app'
// 引入 store
import store from '@/store/'

export default {
  name: 'app',
  components: {
    VBottomNav,
    VPlayer,
    VPlayerDetail
  },
  store,
  data () {
    return {
      bottomNavBars: []
    }
  },
  methods: {
    audioFinish () {
      console.log('播放结束')
    }
    // showAudioBox () {
    // }
  },
  created () {
    this.bottomNavBars = dataBottomNavBars
    // storage.set('bottomNavBars', dataBottomNavBars)
  },
  mounted () {
    // console.log(this.$store.state.song)
  }
}
</script>
