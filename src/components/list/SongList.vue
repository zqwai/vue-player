<template>
  <v-list>
    <v-list-tile 
      v-for="(list, i) in lists"  
      :key="i"
      avatar
      class="pt-2 pb-2"
      :to="list.url"
    >
      <v-list-tile-action>
        <img :src="list.thumb" width="100%">
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title v-text="list.name"></v-list-tile-title>
        <v-list-tile-sub-title>{{list.author}}</v-list-tile-sub-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-list-tile-action-text>{{ list.time }}</v-list-tile-action-text>
        <v-icon
          color="grey lighten-1"
        >fa-star</v-icon>
      </v-list-tile-action>

    </v-list-tile>
  </v-list>
</template>

<script>

export default {
  name: 'song-list',
  data: () => ({
    lists: [
      {
        name: '雨纷纷',
        thumb: 'https://y.gtimg.cn/music/photo_new/T002R90x90M000002QmnEn3SGOsK.jpg?max_age=2592000',
        url: '#',
        playnum: '12312',
        time: '04:34',
        author: '双笙',
      },
      {
        name: '不如我先说',
        thumb: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001uBC4s0X5tVc.jpg?max_age=2592000',
        url: '#',
        playnum: '12312',
        time: '04:34',
        author: '李琦',
      }
    ], 
  })
}
</script>

<style lang="stylus" scoped>
.v-list
  .v-tabs__container--align-with-title
    padding-left 0 !important
  .v-list__tile__action
    width 56px 
    .v-icon
      font-size .76rem
  // 标题
  .v-list__tile__content
    margin-left .5rem
</style>
