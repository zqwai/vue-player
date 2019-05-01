<template>
<section>
  <v-list>
    <v-list-tile
      v-for="(menu, index) in menus"
      :key="index"
      :to="`/artists/${menu.uid}`"
    >
    <v-list-tile-content>
      <v-list-tile-title v-text="menu.text"></v-list-tile-title>
    </v-list-tile-content>
    </v-list-tile>
  </v-list>
</section>
</template>

<script>
// data
import { dataArtistMenus } from '@/data/db_app'
// 本地存储
// import storage from '../../model/storage'

export default {
  name: 'artists',
  data () {
    return {
      menus: []
    }
  },
  methods: {
  },
  created () {
    this.menus = dataArtistMenus
    // console.log(this.dataArtistMenus)
  }
}
</script>
