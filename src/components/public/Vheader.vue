<template>
  <header id="vheader">

    <v-toolbar app>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
        fixed
        v-model="drawer"
        right
        app
      >
      <v-container>
        <v-layout align-center>
          <v-text-field
            placeholder="搜索歌名/歌手..."
            single-line
            append-icon="search"
            color="white"
            hide-details
          ></v-text-field>
        </v-layout>
      </v-container>

      <v-list dense>

        <v-list-tile
        v-for="(navbar, index) in bottomNavBars"
        :key="index"
        :to="navbar.link"
        >
          <v-list-tile-action>

            <v-icon>{{navbar.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{navbar.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

  </header>
</template>

<script>

export default {
  name: 'vheader',
  props: {
    bottomNavBars: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      drawer: null,
      title: 'Vue 音乐播放器'
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-window
  min-height 100%
</style>
