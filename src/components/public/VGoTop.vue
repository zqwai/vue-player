<template>
  <v-btn
    icon
    fixed
    small
    round
    class="icon-scroll"
    @click="goTo"
    :color="btnGoToColor"
    v-show="scrollShow"
    v-scroll="showScrollButton"
  >
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'v-go-top',
  props: {
    btnGoToColor: {
      type: String,
      default: 'pink'
    }
  },
  data: () => ({
    offsetTop: 0,
    scrollShow: false
  }),
  methods: {
    goTo () {
      this.$vuetify.goTo(0)
    },
    showScrollButton (e) {
      if (typeof window === 'undefined') return
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || e.target.scrollTop || 0
      // console.log(top)
      this.scrollShow = top > 300
    }
  }
}
</script>
<style lang="stylus" scoped>
.icon-scroll
  bottom 60px
  right 15px
  z-index 999
</style>
