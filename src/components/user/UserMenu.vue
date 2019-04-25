<template>
  <v-card
    width="100%"
  >

    <v-list two-line subheader>
      <v-subheader>基本信息</v-subheader>

      <v-list-tile
      v-for="item in items"
      :key="item.title"
      avatar
      >
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">arrow_forward_ios</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider></v-divider>

      <v-subheader>关于我们</v-subheader>

      <v-list-tile
        v-for="item in items2"
        :key="item.title"
        avatar
      >
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">fa fa-angle-right</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

  </v-card>
</template>

<script>

export default {
  name: 'user-menu',
  data () {
    return {
      items: [
        { icon: 'account_box', iconClass: 'grey lighten-1 white--text', title: '个人信息', subtitle: 'Jan 9, 2014' },
        { icon: 'bookmark', iconClass: 'grey lighten-1 white--text', title: '我的标签', subtitle: 'Jan 17, 2014' },
        { icon: 'grade', iconClass: 'grey lighten-1 white--text', title: '我的收藏', subtitle: 'Jan 28, 2014' }
      ],
      items2: [
        { icon: 'users', iconClass: 'blue white--text', title: '团队简介', subtitle: 'Jan 20, 2014' },
        { icon: 'phone_iphone', iconClass: 'amber white--text', title: '联系我们', subtitle: 'Jan 10, 2014' }
      ]
    }
  }
}
</script>
