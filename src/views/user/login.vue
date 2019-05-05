<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12>
        <v-text-field
          v-model.trim="$v.email.$model"
          :error-messages="emailErrors"
          label="邮箱"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        >
        </v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-text-field
          label="密码"
          required
          v-model.trim="$v.password.$model"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
      </v-flex>

      <!-- <v-flex xs12>
        <v-text-field
          label="重复密码"
          required
          v-model.trim="$v.repeatPassword.$model"
          :error-messages="repeatPasswordErrors"
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
        ></v-text-field>
      </v-flex> -->

      <v-btn
        color="orange"
        @click="submit"
      >
        邮箱登录
      </v-btn>

      <v-btn @click="clear">重置</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
// 表单验证
import { validationMixin } from 'vuelidate'
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
// api
import { getLoginEmail } from '@/api/'
// 本地存储
import storage from './../../model/storage'
export default {
  name: 'login',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      console.log(this.email, this.password)
      // postLoginEmail(this.email, this.password).then((req) => {
      //   console.log(req)
      // })
      this._getLoginEmail(this.email, this.password)
    },
    clear () {
      this.$v.$reset()
      this.password = ''
      this.email = ''
      this.repeatPassword = ''
    },
    _getLoginEmail (vEmail, vPassword) {
      getLoginEmail(vEmail, vPassword).then((res) => {
        if (res.data.code === 200) {
          console.log(res)
          storage.set('user', res)
        }
      })
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('必须是有效的电子邮件')
      !this.$v.email.required && errors.push('邮箱不能为空')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('密码长度不能低于6个字符')
      !this.$v.password.required && errors.push('密码不能为空')
      return errors
    }
  }
}
</script>
