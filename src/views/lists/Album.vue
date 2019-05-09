<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout row wrap>

        <v-flex xs12
        v-for="item in albumnewest"
        :key="item.id"
        class="v-list-wrap"
        >
          <v-card class="white--text">

            <v-img
              class="bg-picUrl"
              :src="item.picUrl"
              contain
            >
              <v-flex xs12 fill-height class="bg-black-op-5">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{item.name}}</div>
                    <div>专辑：{{ item.artist.name }}</div>
                    <div>公司：{{item.company}}</div>
                  </div>
                </v-card-title>

                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <v-btn small outline
                  :to='`/detil/${item.id}`'
                  >
                    查看明细
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-icon>star_border</v-icon>
                </v-card-actions>
              </v-flex>
            </v-img>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-card>

</template>
<script>
// api
import { getTopAlbum } from '@/api/index'

export default {
  name: 'album',
  components: {
    // SCard
  },
  data: () => ({
    albumnewest: []
  }),
  methods: {
    _getTopAlbum () {
      // offset 分页 5
      // limit 数量 10
      getTopAlbum('5', '10').then((res) => {
        this.albumnewest = res.data.albums
        console.log(this.albumnewest)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    this._getTopAlbum()
  }
}
</script>

<style lang="stylus" scoped>
.v-list-wrap
  .v-card__title
    min-height 70%
.bg-black-op-5
  background-color rgba(0,0,0,.5)
</style>
