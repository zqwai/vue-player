<template>
  <section>
    <Vheader />
    <!-- carousel -->
    <v-carousel
      height="128"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- /carousel -->
    <Home />

    <SongList />

    <Vfooter />
  </section>
</template>

<script>
// @ is an alias to /src
import Vheader from '@/components/public/Vheader'
import Home from '@/components/home/Home.vue'
import SongList from '@/components/list/SongList.vue'
import Vfooter from '@/components/public/Vfooter'

// axios
import axios from 'axios'
// 本地存储
// import storage from '@/model/storage'

export default {
  name: 'home',
  components: {
    Vheader,
    Home,
    SongList,
    Vfooter
  },
  data () {
    return {
      items: [
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1247597.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1248529.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1248444.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1247320.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1245474.jpg'
        }
      ]
    }
  },
  created () {
    axios.get('http://localhost:3000/top/song?type=9')
      .then((data) => {
        console.log(data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  mounted () {
    //
  }
}
</script>
