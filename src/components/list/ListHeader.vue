<template>
  <v-toolbar tabs>
    <v-text-field
      append-icon="mic"
      class="pt-3"
      flat
      label="搜索..."
      prepend-inner-icon="search"
      solo-inverted
    ></v-text-field>

    <template v-slot:extension>
      <v-tabs
        centered
        color="transparent"
        slider-color="white"
      >
        <v-tab
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.url"
        >
          {{ menu.text }}
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>

export default {
  name: 'list-header',
  data () {
    return {
      menus: [
        {
          text: '推荐',
          url: '/list'
        },
        {
          text: '新歌',
          url: '/new'
        },
        {
          text: '排行榜',
          url: '/billboard'
        },
        {
          text: '专辑',
          url: '/album'
        },
        {
          text: '歌手',
          url: '/artist'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// .v-input__icon
//   .v-icon
//     font-size 1.2rem !important
// .v-input__slot
//   margin-bottom 0
</style>
