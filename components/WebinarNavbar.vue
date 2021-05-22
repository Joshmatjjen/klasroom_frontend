<template>
  <div :class="{ 'bg-orange-100': darkMenu }">
    <div class="container mx-auto h-20">
      <nav class="flex items-center justify-between flex-wrap py-4 md:py-6">
        <nuxt-link
          to="/"
          class="flex items-center flex-shrink-0 mx-auto"
        >
          <img src="/logo.svg" />
        </nuxt-link>

  
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    open: false,
    signUpOpt: false,
    loginOpt: false,
    userMenu: false,
  }),
  computed: {
    ...mapState({
      darkMenu: (state) => state.app.darkMenu,
    }),
  },
  methods: {
 
  },
}
</script>

<style scoped>
.menu-group {
  @apply transition duration-500;
  @apply w-full flex-grow bg-white mt-5 shadow-lg px-4;
}
.menu-item {
  @apply text-sm text-black mr-8;
}
.menu-item:hover {
  @apply text-orange-500;
}
.menu-item.has-child {
  background-image: url('/actions/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: right 0 top 8px;
  padding-right: 24px;
}
.btn {
  @apply text-center;
}
.pop-up {
  top: 4rem;
  right: 0;
}
.pop-up-item {
  padding: 12.5px 36px;
  font-size: 0.875rem;
  font-weight: 300;
  border-radius: 0.5rem;
}

@media (min-width: 768px) {
  .menu-group {
    @apply flex items-center w-auto shadow-none;
    @apply bg-transparent px-0 mt-0;
  }
}
</style>
