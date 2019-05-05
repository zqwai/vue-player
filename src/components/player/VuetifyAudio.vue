<template>
  <section ref="vplayui" class="vplay-ui">

  <v-slider
    class="playbar"
    @click.native="setPosition()"
    v-model="percentage"
    dark
    :disabled="!loaded"
  ></v-slider>

    <audio
      id="player"
      ref="audio"
      class="hide"
      name="media"
      :src="song.mp3Url"
    >
    </audio>

    <v-list
      width="100%"
    >
      <v-list-tile>

        <v-list-tile-avatar
          @click="openPlayDetil"
        >
          <img :src="song.picUrl">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{song.name}} - <small>{{song.artistsName}}-《{{song.albumName}}》</small>
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ currentTime }}-{{ duration }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-btn
          outline
          icon
          class="pui-btn"
          @click.native="playing ? pause() : play()"
          :disabled="!loaded"
        >
          <v-icon v-if="!playing || paused">play_arrow</v-icon>
          <v-icon v-else>pause</v-icon>
        </v-btn>

        <v-btn
          outline
          icon
          class="pui-btn hide"
          @click.native="stop()"
          :disabled="!loaded"
        >
          <v-icon>stop</v-icon>
        </v-btn>

        <v-btn
          outline icon
          class="pui-btn hide"
          @click.native="mute()"
          :disabled="!loaded"
        >
            <v-icon v-if="!isMuted">volume_up</v-icon>
            <v-icon v-else>volume_off</v-icon>
        </v-btn>

        <v-btn
          outline
          icon
          class="pui-btn hide"
          @click.native="loaded ? download() : reload()"
        >
            <v-icon v-if="!loaded">refresh</v-icon>
            <v-icon v-else>vertical_align_bottom</v-icon>
        </v-btn>
      </v-list-tile>
    </v-list>
  </section>
</template>

<script>
const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8)

export default {
  name: 'v-audio',
  props: {
    song: {
      url: {
        type: String,
        default: null
      },
      thumb: {
        type: String,
        default: null
      },
      anthor: {
        type: String,
        default: null
      }
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    ended: {
      type: Function,
      default: () => {}
    },
    canPlay: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      firstPlay: true,
      // 声音
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
      // 播放器dom
      audio: undefined,
      // vplay ui dom
      vplayui: undefined
    }
  },
  methods: {
    openPlayDetil () {
      console.log('打开歌曲播放详情面板')
    },
    // playbar 点位 播放
    setPosition () {
      // 当前时间更新
      this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage)
      // 当前位置播放
      this.paused = false
      this.audio.play().then(() => {
        this.playing = true
      })
    },
    // 停止
    stop () {
      this.paused = this.playing = false
      this.audio.pause()
      this.audio.currentTime = 0
    },
    // 播放
    play () {
      if (this.playing) return
      this.paused = false
      this.audio.play().then(() => {
        this.playing = true
      })
    },
    // 暂停
    pause () {
      this.paused = !this.paused;
      (this.paused) ? this.audio.pause() : this.audio.play()
    },
    // 下载
    download () {
      this.audio.pause()
      window.open(this.song.url, 'download')
    },
    // 声音
    mute () {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
      this.volumeValue = this.isMuted ? 0 : 75
    },
    // 重加载
    reload () {
      this.audio.load()
    },

    // 初始化
    _handleLoaded: function () {
      // 监听所处状态
      if (this.audio.readyState >= 2) {
        if (this.audio.duration === Infinity) {
          this.audio.currentTime = 1e101
          this.audio.ontimeupdate = () => {
            this.audio.ontimeupdate = () => {}
            this.audio.currentTime = 0
            this.totalDuration = parseInt(this.audio.duration)
            this.loaded = true
          }
        } else {
          this.totalDuration = parseInt(this.audio.duration)
          this.loaded = true
        }
        if (this.autoPlay) this.audio.play()
      } else {
        throw new Error('Failed to load sound file')
      }
    },
    // 进度条
    _handlePlayingUI: function () {
      this.percentage = this.audio.currentTime / this.audio.duration * 100
      this.currentTime = formatTime(this.audio.currentTime)
    },

    _handlePlayPause: function (e) {
      if (e.type === 'play' && this.firstPlay) {
        this.audio.currentTime = 0
        if (this.firstPlay) {
          this.firstPlay = false
        }
      }
      if (e.type === 'pause' && this.paused === false && this.playing === false) {
        this.currentTime = '00:00:00'
      }
    },

    _handleEnded () {
      this.paused = this.playing = false
    },

    init: function () {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI)
      this.audio.addEventListener('loadeddata', this._handleLoaded)
      this.audio.addEventListener('pause', this._handlePlayPause)
      this.audio.addEventListener('play', this._handlePlayPause)
      this.audio.addEventListener('ended', this._handleEnded)
    }
  },
  computed: {
    duration: function () {
      return this.audio ? formatTime(this.totalDuration) : ''
    }
  },
  mounted () {
    this.vplayui = this.$refs.vplayui
    this.audio = this.$refs.audio
    this.init()
  },
  created () {
    // const fullscreen = window.screen.width;
    // console.log(fullscreen)
  },
  beforeDestroy () {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
    this.audio.removeEventListener('ended', this._handleEnded)
  }
}
</script>

<style lang="stylus" scoped>
.vplay-ui
  width 100%
  height 70px
  padding-top 7px
  background-color rgba(30,30,30,.8);
  position fixed
  bottom 56px
  left 0
  z-index 5
  .hide
    display:none
  .theme--dark.v-list
    background none
  .playbar
    position absolute
    top -15px
    left 0
    width 100%
    margin 0
    height auto
    .v-input__slot
      margin-bottom 0
</style>
