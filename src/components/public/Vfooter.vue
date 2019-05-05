<template>
  <v-footer
    height="auto"
    class="mt-1"
    style="width:100%"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="justify-center grey--text">
        &copy; {{new Date().getFullYear()}}-<strong>{{copyright}}</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  name: 'vfooter',
  props: {
    copyright: {
      type: String,
      default: 'David[气味]'
    }
  },
  data () {
    return {
      // icons:
    }
  }
}
</script>
