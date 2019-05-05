<template>

  <s-card
    :playlists="playlists"
  ></s-card>

</template>

<script>
import SCard from '@/components/list/SongCard'
// api
import { getPersonalized } from '@/api/index'

export default {
  name: 'list',
  components: {
    SCard
  },
  data: () => ({
    playlists: []
  }),
  methods: {
    _getPersonalized () {
      getPersonalized().then((res) => {
        if (res.status === 200) {
          console.log(res)
          res.data.result.forEach((el) => {
            let newArr = {
              id: el.id,
              name: el.name,
              copywriter: el.copywriter,
              picUrl: el.picUrl,
              playCount: el.playCount,
              trackCount: el.trackCount
            }
            this.playlists.push(newArr)
          })
          // console.log(this.playlists)
        } else {
          console.log(`data loading failed, err status: ${res.status}.`)
        }
      })
    }
  },
  created () {
    this._getPersonalized()
  }
}
</script>
