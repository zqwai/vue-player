<template>
<section>
  SDF
    <!-- <v-tab
      v-for="(item, index) in categories"
      :key="index"
    >
      {{ item.name }}
    </v-tab> -->
</section>
</template>

<script>
// import { getPlaylistDetail } from '@/api/'

export default {
  name: 'discover-playlist',
  data () {
    return {
      categories: [],
      playlists: [],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: '22'
    }
  },
  created () {
    // this.playlistHot
    // getPlaylistDetail(24381616).then((data) => {
    //   // console.log(data.data)
    //   // this.categories = data.data.sub
    //   // console.log(this.$route.params.id)
    //   // 获取歌手分类名
    //   // for (let i = 0; i < data.data.sub.length; i++) {
    //   //   if (this.$route.params.id === data.data.sub[i].type) {
    //   //     console.log(this.$route.params.id)
    //   //   }
    //   // }
    //   // if(data.data.sub.type == this.$route.params.id) {
    //   //   console.log(this.$route.params.id)
    //   // }
    // })
  }
}
</script>
