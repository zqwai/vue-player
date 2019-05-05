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

      <v-container v-if="false">

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

    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  name: 'vheader',
  props: {
  },
  data () {
    return {
      drawer: null,
      title: 'Vue 音乐播放器'
    }
  },
  methods: {
  },
  computed: {
  }

}
</script>
