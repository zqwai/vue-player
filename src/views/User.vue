<template>
  <v-layout row wrap>
      <UserHeader />
      <UserMenu />
      <Vfooter />
  </v-layout>
</template>

<script>
import UserHeader from '@/components/user/UserHeader'
import UserMenu from '@/components/user/UserMenu'
import Vfooter from '@/components/public/Vfooter'
export default {
  name: 'user',
  components: {
    UserHeader,
    UserMenu,
    Vfooter
  },
  data () {
    return {

    }
  }
}
</script>
