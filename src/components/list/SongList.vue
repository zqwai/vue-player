<template>
  <v-list>
    <v-list-tile
      v-for="(list, i) in lists"
      :key="i"
      :id="list.id"
      avatar
      class="pt-2 pb-2"
    >
      <v-list-tile-action class="v-thumb">
        <img :src="list.picUrl">
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title v-text="list.name"></v-list-tile-title>
        <v-list-tile-sub-title>{{list.copywriter}}</v-list-tile-sub-title>
      </v-list-tile-content>

      <v-list-tile-action class="v-side-icon">
        <v-list-tile-action-text>{{ Math.floor(`${list.trackCount}`) }}</v-list-tile-action-text>
        <v-icon color="grey">star</v-icon>
      </v-list-tile-action>

    </v-list-tile>
  </v-list>
</template>

<script>

export default {
  name: 'song-list',
  props: {
    lists: {
      type: Array,
      default: null
    }
  },
}
</script>

<style lang="stylus" scoped>
.v-list
  .v-tabs__container--align-with-title
    padding-left 0 !important
  .v-thumb
    width 56px
    height 56px
    overflow hidden
    img
      width 100%
  .v-side-icon
    min-width 3rem
  // 标题
  .v-list__tile__content
    margin-left .5rem
</style>
