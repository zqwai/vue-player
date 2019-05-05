<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">Unlimited music now</div>
                <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card color="cyan darken-2" class="white--text">
            <v-layout>
              <v-flex xs5>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Supermodel</div>
                    <div>Foster the People</div>
                    <div>(2014)</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              Rate this album
              <v-spacer></v-spacer>
              <v-btn outline fab small>
                <v-icon>fa-info</v-icon>
              </v-btn>
              <v-btn outline fab small>
                <v-icon>fa-play</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card color="purple" class="white--text">
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Halycon Days</div>
                    <div>Ellie Goulding</div>
                    <div>(2013)</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              Rate this album
              <v-spacer></v-spacer>
              <v-btn outline fab small>
                <v-icon>fa-info</v-icon>
              </v-btn>
              <v-btn outline fab small>
                <v-icon>fa-play</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
// import ListHeader from '@/components/list/ListHeader'

export default {
  name: 'album',
  components: {
    // ListHeader,
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
<style lang="stylus" scoped>
.v-btn--floating.v-btn--small
  width 1.52rem
  height 1.52rem
  text-align center
  .v-icon
    font-size .76rem
</style>
