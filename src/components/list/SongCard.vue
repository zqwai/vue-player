<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-card-title class="pt-0 pb-1 pl-0 pr-0">
          <span class="grey--text">{{title}}</span>
        </v-card-title>
        <v-flex
          v-for="item in propsPlaylists"
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
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '精品歌单'
    },
    playlists: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      //
    }
  }
}
</script>
