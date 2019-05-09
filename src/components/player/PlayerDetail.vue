<template>
<!-- class="vplay-ui vplay-full" -->
  <v-img
  class="vplay-ui vplay-full"
  src="https://picsum.photos/500/300?image=30"
  gradient="to top right, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)"
  >
    <v-layout
      column
      fill-height
    >
      <v-card-title>
        <v-btn icon
        @click="closePlayerDetail"
        >
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list-tile-content
        >
          <v-list-tile-title class="text-center">夜空中最亮的星</v-list-tile-title>
          <v-list-tile-sub-title class="text-center">逃跑计划 - 世界</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-btn flat icon small>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-title>

      <v-tabs
        color="rgba(0,0,0, .0)"
        icons
        centered
        style="height:60vh"
      >

        <v-tab
          href="#tab-1"
        >
          。
        </v-tab>
        <v-tab
          href="#tab-2"
        >
          。
        </v-tab>

        <v-tabs-items>
          <v-tab-item
            value="tab-1"
            align-center
          >
            <v-flex
              xs12
              align-center
              justify-center
              layout
              text-xs-center
              class="pt-4"
            >
              <v-avatar size='70vw'>
                <img :src="uibg" alt="avatar">
              </v-avatar>
            </v-flex>
          </v-tab-item>

          <v-tab-item
            value="tab-2"
          >
            <v-flex
              xs12
              align-center
              justify-center
              layout
              text-xs-center
              class="box-lyric"
            >
              <v-card flat
              color="rgba(0,0,0, .0)">
                <v-card-text v-html="text"></v-card-text>
              </v-card>
            </v-flex>

          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

      <v-layout
      class="box-btn"
      align-center justify-space-around row
      >
        <v-icon>favorite_border</v-icon>
        <v-icon>play_for_work</v-icon>
        <v-icon>share</v-icon>
        <v-icon>chat</v-icon>
      </v-layout>

      <v-layout
      class="box-play-time"
      align-start justify-space-between row
      >
        <v-flex xs2
        class="text-center"
        >
          00:00
        </v-flex>
        <v-flex xs8 class="pl-2 pr-2 box-slider">
          <v-slider
            dark
            class="mt-0"
            height="5vh"
          ></v-slider>
        </v-flex>
        <v-flex xs2
        class="text-center"
        >
          03:23
        </v-flex>
      </v-layout>

      <v-flex>
        <v-layout align-center justify-space-between row>
          <v-flex xs12 sm2>
            <v-btn flat icon color="white">
              <v-icon>repeat</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm2>
            <v-btn fab icon small color="rgba(100,100,100,.6)">
              <v-icon>skip_previous</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm4>
            <v-btn fab icon color="rgba(10,10,10,.8)">
              <v-icon>play_arrow</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm2>
            <v-btn fab icon small color="rgba(100,100,100,.6)">
              <v-icon>skip_next</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm2>
            <v-btn flat icon color="white">
              <v-icon>queue_music</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-img>
</template>

<script>
// 引入 store
import store from '@/store/'

export default {
  name: 'v-player-detail',
  store,
  props: {
  },
  data () {
    return {
      uibg: require('../../assets/images/user.jpg'),
      text: `<p>是大好河山倒海翻江可视电话是大好河山倒海翻江可视电话可减肥可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥是大好河山倒海翻江可视电话可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥</p>
<p>是大好河山倒海翻江可视电话可减肥</p>`
    }
  },
  methods: {
    closePlayerDetail () {
      this.$store.state.showPlayerDetail = !this.$store.state.showPlayerDetail
    }
  },
  computed: {},
  mounted () {},
  created () {},
  beforeDestroy () {}
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
.vplay-full
  height 100%
  bottom 0
  .text-center
    text-align center
  .v-card__title
    padding 8px 0
    .v-list__tile__title
      font-size 1.6rem
  .box-lyric
    height 46vh
    width 100%
    overflow hidden
.box-play-time
  line-height 22px;
  .box-slider
    height 22px
    overflow hidden
    .v-input__slot
      margin-bottom 0 !important
    .theme--dark.v-messages
      display none !important
</style>
