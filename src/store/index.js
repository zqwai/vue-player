import Vue from 'vue'
import Vuex from 'vuex'
// api
// import { getSongUrl, getLyric } from '@/api/index'

Vue.use(Vuex)

// 数据
let state = {
  // dom ===============
  playerUiEle: '',
  audioEle: '',
  // 状态 ===============
  showPlayerDetail: false,
  // 显示播放器
  showPlayer: false,
  firstPlay: true,
  // // 声音
  isMuted: false,
  loaded: false,
  // 播放
  playing: false,
  // 暂停
  paused: false,
  // 播放进度
  percentage: 0,
  // 当前播放时间
  currentTime: '00:00:00',
  // 总播放时长
  totalDuration: 0,
  // 数据 =============
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
  playerUiEleData (state, ele) {
    state.playerUiEle = ele
  },
  audioEleData (state, ele) {
    state.audioEle = ele
  },
  pushSongData (state, data) {
    state.showPlayer = true
    // state.playing = true
    state.song = data
    console.log(state.showPlayer)
    console.log(state.song)
  },
  playingData (state, data) {
    state.playing = data
  },
  pauseData (state, data) {
    state.pause = data
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
