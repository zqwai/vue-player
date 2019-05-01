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

    <VuetifyAudio
      :song="song"
      :ended="audioFinish"
      v-if="false"
    >
    </VuetifyAudio>
    <!-- <VuetifyAudioList></VuetifyAudioList> -->

  </v-layout>
  </v-app>
</template>

<script>
import VBottomNav from '@/components/public/VBottomNav'
import VuetifyAudio from '@/components/player/VuetifyAudio'
// axios
// import axios from 'axios'
// 本地存储
// import storage from '@/model/storage'
// app data
import { dataBottomNavBars } from './data/db_app'

export default {
  name: 'app',
  components: {
    VBottomNav,
    VuetifyAudio
  },
  data () {
    return {
      song: {
        thumb: 'http://pic.xiami.net/images/album/img50/480050/4800501532480051.jpg@!c-400-400',
        url: 'http://m128.xiami.net/511/1511/2103842553/1804120461_1532656680066.mp3?auth_key=1556679600-0-0-90c6f362cff6f8ab92e47e01d92f5ddb',
        title: '心如止水',
        anthor: '心如止水'
      },
      bottomNavBars: []
    }
  },
  methods: {
    audioFinish () {
      console.log('播放结束')
    }
  },
  created () {
    this.bottomNavBars = dataBottomNavBars
    // storage.set('bottomNavBars', dataBottomNavBars)
  },
  mounted () {
    // console.log('2' + dataBottomNavBars)
  }
}
</script>
