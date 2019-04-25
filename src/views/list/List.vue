<template>
  <SongList/>
</template>

<script>
import SongList from '@/components/list/SongList'

export default {
  name: 'list',
  components: {
    SongList
  },
  data: () => ({
    lists: [
      {
        name: '雨纷纷',
        thumb: 'https://y.gtimg.cn/music/photo_new/T002R90x90M000002QmnEn3SGOsK.jpg?max_age=2592000',
        url: '#',
        playnum: '12312',
        time: '04:34',
        author: '双笙'
      },
      {
        name: '不如我先说',
        thumb: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001uBC4s0X5tVc.jpg?max_age=2592000',
        url: '#',
        playnum: '12312',
        time: '04:34',
        author: '李琦'
      }
    ]
  })
}
</script>
