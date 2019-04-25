<template>
<v-card
  width="100%"
>
  <v-img
    :src="src"
    height="200px"
  >
    <v-layout
      column
      fill-height
    >
      <v-card-title>
        <v-btn dark icon>
          <v-icon>arrow_back_ios</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn dark icon class="mr-1">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-btn dark icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>颜卫芳</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
          <v-icon class="mr-1">thumb_up</v-icon>
          <span class="subheading mr-2">256</span>
          <v-icon class="mr-1">share</v-icon>
          <span class="subheading">45</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>

    </v-layout>
  </v-img>
</v-card>

</template>

<script>
export default {
  name: 'user-header',
  data: () => ({
    src: 'https://cdn.vuetifyjs.com/images/lists/ali.png'
  })
}
</script>

<style lang="stylus" scoped>
.v-responsive__content
  .v-card__title
    padding 0
    .v-icon
      font-size 1.4rem !important
</style>
