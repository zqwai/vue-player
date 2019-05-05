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

    <v-audio
      :song="this.$store.state.song"
      :ended="audioFinish"
      v-if="this.$store.state.showPlayer"
    >
    </v-audio>
    <!-- <VuetifyAudioList></VuetifyAudioList> -->

  </v-layout>
  </v-app>
</template>

<script>
import VBottomNav from '@/components/public/VBottomNav'
import VAudio from '@/components/player/VuetifyAudio'
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
    VAudio
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
    console.log(this.$store.state.song)
  }
}
</script>
