<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="card in cards"
          :key="card.title"
          v-bind="{ [`xs${card.flex}`]: true }"
        >
          <v-card>
            <v-img
              :src="card.src"
            >
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text" v-text="card.title"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>play_arrow</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      cards: [
        { title: '欧美R&B ：新旧碰撞的迷幻浪潮', src: 'https://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu0oibQl7aic4ica96322ibeF7ujS0V4RY7SO2A/300?n=1', flex: 12 },
        { title: '热歌', src: 'https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000', flex: 6 },
        { title: '一人一首招牌歌', src: 'https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000', flex: 6 }
      ]
    }
  }
}
</script>
