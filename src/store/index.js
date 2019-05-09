import Vue from 'vue'
import Vuex from 'vuex'
// api
// import { getSongUrl, getLyric } from '@/api/index'

Vue.use(Vuex)

// 数据
let state = {
  // 显示播放器
  showPlayer: false,
  // // firstPlay: true,
  // // 声音
  // isMuted: false,
  // loaded: false,
  // 播放
  playing: false,
  // // 暂停
  // paused: false,
  song: {}
  // song: {
  //   mp3Url: '',
  //   name: '',
  //   picUrl: '',
  //   playTime: '',
  //   id: '',
  //   artistsId: ''
  // }
}
// 方法 用于改变state里的数据
let mutations = {
  pushSongData (state, data) {
    state.showPlayer = true
    // state.playing = true
    state.song = data
    console.log(state.showPlayer)
    console.log(state.song)
  },
  playingData (state, data) {
    state.playing = true
  }
}
let actions = {

}

let store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
