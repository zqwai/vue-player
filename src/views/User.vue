<template>
  <v-layout row wrap>
    <v-card
      width="100%"
    >
      <v-img
        :src="headerBg"
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
                :src="headerBg"
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

    <v-card
      width="100%"
    >
      <v-list two-line subheader>
        <template
          v-for="menu in menus"
        >
          <v-subheader :key="menu.id">{{menu.title}}</v-subheader>
          <template
            v-for="item in menu.cont"
          >
            <v-list-tile
            :key="item.id"
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
          </template>
        </template>

        <v-subheader>系统设置</v-subheader>
        <v-list-tile
        avatar
        >
          <v-list-tile-avatar>
            <v-icon class="red white--text">settings</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>清除缓存</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action
          @click.stop="dialog = true"
          >
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">arrow_forward_ios</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

      </v-list>

    </v-card>

    <v-footer />

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-text>
          您确定要清除app缓存么？
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            不同意
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="clearLocalStorge"
          >
            同意
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
import VFooter from '@/components/public/Vfooter'
import storage from '@/model/storage'
export default {
  name: 'user',
  components: {
    VFooter
  },
  data: () => ({
    headerBg: require('./../assets/images/user.jpg'),
    dialog: false,
    menus: [
      {
        id: '0',
        title: '基本信息',
        cont: [
          { id: '3', icon: 'account_box', iconClass: 'blue lighten-1 white--text', title: '个人信息' },
          { id: '4', icon: 'bookmark', iconClass: 'blue lighten-1 white--text', title: '我的标签' },
          { id: '5', icon: 'grade', iconClass: 'blue lighten-1 white--text', title: '我的收藏' }
        ]
      },
      {
        id: '1',
        title: '关于我们',
        cont: [
          { id: '6', icon: 'face', iconClass: 'amber white--text', title: '团队简介' },
          { id: '7', icon: 'phone_iphone', iconClass: 'amber white--text', title: '联系我们' }
        ]
      }
    ]
  }),
  methods: {
    clearLocalStorge () {
      console.log(localStorage)
      this.dialog = false
      storage.clear()
    }
  }
}
</script>
