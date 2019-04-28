<template>
  <section>
    <Vheader />
    <!-- carousel -->
    <v-carousel
      height="128"
    >
      <v-carousel-item
        v-for="(item, i) in banners"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- /carousel -->

    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-card-title class="pt-0 pb-1 pl-0 pr-0">
            <span class="grey--text">精品歌单</span>
          </v-card-title>
          <v-flex
            v-for="item in highqualitys"
            :key="item.userId"
            d-flex
            v-bind="{ [`xs${item.flex}`]: true }"
          >
            <v-card>
              <v-img
                :src="item.coverImgUrl"
              >
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="item.creator.nickname"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                {{item.name}}
              </v-card-title>
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

    <SongList />

    <Vfooter />
  </section>
</template>

<script>
// @ is an alias to /src
import Vheader from '@/components/public/Vheader'
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
    SongList,
    Vfooter
  },
  data () {
    return {
      banners: [
        {
          src: require('../assets/images/banner/1247597.jpg')
        },
        {
          src: require('../assets/images/banner/1248529.jpg')
        },
        {
          src: require('../assets/images/banner/1248444.jpg')
        },
        {
          src: require('../assets/images/banner/1247320.jpg')
        },
        {
          src: require('../assets/images/banner/1245474.jpg')
        }
      ],
      highqualitys: []
    }
  },
  methods: {
    //
  },
  created () {
    axios.get('/related/playlist?id=1')
      .then((data) => {
        // console.log(data.data.playlists)
        this.highqualitys = data.data.playlists
        for (var i = 0; i < this.highqualitys.length; i++) {
          // console.log(i + ':' + this.highqualitys[i])
          if (this.highqualitys.length / 2 > 0) {
            if (i === 0) {
              this.highqualitys[0].flex = '12'
            } else {
              this.highqualitys[i].flex = '6'
            }
            // console.log(this.highqualitys)
          } else {
            this.highqualitys[i].flex = '6'
          }
        }
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
