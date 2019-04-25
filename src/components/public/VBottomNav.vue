<template>
  <v-bottom-nav
  fixed
  app
  :value = 'true'
  >
    <v-btn
      value="recent"
      v-for="(bottomNavBar, index) in bottomNavBars"
      :key="index"
      :to="bottomNavBar.link"
    >
      <span>{{bottomNavBar.text}}</span>
      <v-icon>{{bottomNavBar.icon}}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>

export default {
  name: 'vbottomnav',
  props: {
    bottomNavBars: {
      type: Array,
      default: null
    },
    isScrollHideBottomNav: {
      type: Boolean,
      default: true
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      //
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
.v-icon
  font-size 1.4rem !important
</style>
