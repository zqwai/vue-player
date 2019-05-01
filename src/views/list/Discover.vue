<template>
<section>
  <v-tabs
    dark
    centered
    color='#333'
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <!-- :to="`/billboard/${index}`" -->
    <v-tab
      v-for="(item, index) in categories"
      :key="index"
    >
      {{ item }}
    </v-tab>
    <v-tabs-items>
      <v-tab-item
        v-for="(item, index) in categories"
        :key="index"
      >
        <v-card flat>

            <template
            v-for="(playlist, k) in playlists"
            >
              <v-tab
                :key="k"
                v-if="playlist.category == index"
                @click="categoryCat(playlist.category, playlist.name)"
                ref="catitem"
              >
                {{ playlist.name }}
              </v-tab>
            </template>

        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
  <router-view></router-view>
</section>
</template>

<script>
import { getPlaylistCatlist, getToplists, getPersonalized } from '@/api/'

export default {
  name: 'discover',
  data () {
    return {
      categories: [],
      playlists: [],
      catdom: undefined
    }
  },
  methods: {
    // category 即playlist.category
    // cat 即playlist.name
    categoryCat (category, cat) {
      // console.log(`${category}-${cat}`)
      getPersonalized().then((res) => {
        // console.log(res)
        if (res.status === 200) {
          console.log(res.data)
        }
      })
      getToplists().then((res) => {
        // console.log(res)
        if (res.status === 200) {
          console.log(res.data)
        }
      })
    }
  },
  created () {
    // this.playlistHot
    getPlaylistCatlist().then((res) => {
      // console.log(data.data.sub)
      if (res.status === 200) {
        this.categories = res.data.categories
        this.playlists = res.data.sub
      }
    })
  },
  mounted () {
    this.catdom = this.$refs.catitem
  }
}
</script>
