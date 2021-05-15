<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <div class="grid grid-cols-12 py-12">
        <div class="col-span-6 md:col-span-2 mb-8 md:mb-0">
          <img src="/logo.svg" />
          <ul class="social-follow mt-5">
            <li class="twitter mr-2">
              <a href="#"></a>
            </li>
            <li class="instagram mr-2">
              <a href="#"></a>
            </li>
            <li class="whatsapp">
              <a href="#"></a>
            </li>
          </ul>
        </div>
        <div class="col-span-12 md:col-span-6">
          <div class="grid grid-cols-12 text-sm mb-10 md:mb-0 gap-x-5">
            <div class="col-span-6 md:col-span-4 mb-8 md:mb-0">
              <strong class="block font-semibold mb-3">Products</strong>
              <ul class="menu-list">
                <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                <li><nuxt-link to="/webinars">Webinars</nuxt-link></li>
                <li><nuxt-link to="/">Klasroom for Business</nuxt-link></li>
                <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
              </ul>
            </div>
            <div class="col-span-6 md:col-span-4 mb-8 md:mb-0">
              <strong class="block font-semibold mb-3">Register</strong>
              <ul class="menu-list">
                <li>
                  <nuxt-link to="/courses">Become an instructor</nuxt-link>
                </li>
                <li><nuxt-link to="/">Become a student</nuxt-link></li>
              </ul>
            </div>
            <div class="col-span-12 md:col-span-4">
              <strong class="block font-semibold mb-3">Resources</strong>
              <ul class="menu-list">
                <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
          <p class="mb-0">
            <small class="text-xs">
              The leading online learning platform for hands on learning
              experiences focused on capacity building and skill acquisition
              relevant for today’s economy. Klasroom provides access to seasoned
              industry experts to learners willing to implement tried and tested
              strategies at their own pace and budget.
            </small>
          </p>
        </div>
      </div>
      <div class="pb-5 text-center">
        <hr class="mb-4 border-gray-300" />
        <small class="text-xs">© 2020 Klasroom. All Rights Reserved.</small>
      </div>
      <!-- <nav class="flex items-center justify-between flex-wrap py-6">
        <div class="flex items-center flex-shrink-0 mr-6">
        </div>
        <div class="block lg:hidden">
          <button
            @click="toggleMenu"
            class="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-900"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav> -->
    </div>
    <login-modal />
    <become-a-tutor-modal />
    <validation-modal />
    <forgot-password-modal />
    <reset-password-modal />
    <purchase-modal />
    <notice-modal />
    <meeting-create-modal />
  </section>
</template>

<script>
export default {
  data: () => ({
    open: false,
  }),
  methods: {
    toggleMenu() {
      this.open = !this.open
    },
  },
}
</script>

<style scoped>
section {
  background-color: #fcf8f7;
}
.social-follow > li,
.social-follow > li > a {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 40px;
  height: 40px;
}
.social-follow > li.twitter > a {
  background-image: url('/icon/social/twitter.svg');
}
.social-follow > li.instagram > a {
  background-image: url('/icon/social/instagram.svg');
}
.social-follow > li.whatsapp > a {
  background-image: url('/icon/social/whatsapp.svg');
}
.menu-list > li {
  line-height: 30px;
}
</style>
