<template>
  <v-toolbar tabs>
    <v-text-field
      append-icon="mic"
      class="pt-3"
      flat
      label="搜索..."
      prepend-inner-icon="search"
      solo-inverted
    ></v-text-field>

    <template v-slot:extension>
      <v-tabs
        centered
        color="transparent"
        slider-color="white"
      >
        <v-tab
          v-for="(item, i) in listMenus"
          :key="i"
          :to="item.url"
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>

export default {
  name: 'list-header',
  props: {
    listMenus: {
      type: Array,
      default: null
    }
  }
}
</script>
