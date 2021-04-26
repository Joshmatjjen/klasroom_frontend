import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
  extend,
} from 'vee-validate'
import { required, email, min, required_if } from 'vee-validate/dist/rules'
import parseMobile from 'libphonenumber-js/mobile'

setInteractionMode('lazy')

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'This {_field_} field is required',
})

extend('phone', {
  message: 'This {_field_} is invalid.',
  validate: (value) => {
    const phoneNumber = parseMobile(value, 'NG')
    // console.log(phoneNumber)
    if (phoneNumber.isValid()) return true
    else return 'Invalid phone number format'
  },
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match',
})

extend('url', {
  message: 'Invalid {_field_} url address',
  validate: (value) => {
    const regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if (regex.test(value)) return true
    else return 'Invalid url format'
  },
})

extend('email', {
  ...email,
  message: 'Invalid email address',
})

extend('min', min)
extend('required_if', required_if)
