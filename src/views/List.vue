<template>
<section id="list">
  <ListHeader
    :listMenus = 'listMenus'
  />
  <router-view></router-view>
</section>
</template>

<script>
import ListHeader from '@/components/list/ListHeader'
// data
import { listMenus } from '@/data/db_app'
export default {
  name: 'lists',
  components: {
    ListHeader
  },
  data () {
    return {
      listMenus: ''
    }
  },
  created () {
    this.listMenus = listMenus
  }
}
</script>
