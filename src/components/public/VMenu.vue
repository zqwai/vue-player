<template>
  <v-list>
    <v-list-tile
      v-for="(menu, index) in dataArtistMenus"
      :key="index"
      :to="menu.url"
    >
    <v-list-tile-content>
      <v-list-tile-title v-text="menu.text"></v-list-tile-title>
    </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'components-menu',
  props: {
    dataArtistMenus: {
      type: Array,
      default: null
    }
  }
}
</script>
