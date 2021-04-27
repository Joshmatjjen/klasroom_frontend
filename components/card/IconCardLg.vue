<template>
  <div class="rounded-lg p-6 sm:p-8 md:p-16 min-h-full" :class="bg">
    <img
      v-if="icon"
      :src="icon"
      class="inline-block mb-5 md:mb-8 w-16 md:w-24"
    />
    <h2
      class="text-xl lg:text-4xl font-bold leading-9 md:leading-10 mb-3 md:mb-5"
      :class="dark ? 'text-white' : 'text-black'"
    >
      {{ title }}
    </h2>
    <p
      class="text-xs md:text-sm mb-5"
      :class="dark ? 'text-white' : 'text-black'"
    >
      {{ desc }}
    </p>
    <nuxt-link
      v-if="linkUrl !== '/tutor/courses/create' && linkUrl !== '/student/webinars/create'"
      :to="linkUrl"
      :class="dark ? 'text-white light' : 'text-black'"
      class="view-more text-sm"
    >
      {{ linkText }}
    </nuxt-link>
    <a
      v-else
      :class="dark ? 'text-white light' : 'text-black'"
      class="view-more text-sm cursor-pointer"
      @click.prevent="signinCallBackAction"
    >
      {{ linkText }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    linkUrl: { type: String, default: '/' },
    linkText: { type: String, default: 'See more' },
    bg: { type: String, default: 'bg-gray-200' },
    dark: { type: Boolean, default: false },
  },
  methods: {
    signinCallBackAction() {
      if (this.linkUrl === '/tutor/courses/create') {

        if (this.$store.getters["auth/user"])
          this.$router.push(this.linkUrl);

        else
          this.$store.commit('app/LOGIN_MODAL', {
            status: true, 
            type: 'login', 
            userType: 'tutor',
            callback: () => {
              this.$router.push(this.linkUrl)
            }
          });
      }
      else {
        
        if (this.$store.getters["auth/user"])
          this.$router.push(this.linkUrl);

        else
          this.$store.commit('app/LOGIN_MODAL', {
            status: true, 
            type: 'login', 
            userType: 'student',
            callback: () => {
              this.$router.push(this.linkUrl)
            }
          });
      }
    }
  }
}
</script>
