<template>
  <div
    class="relative bg-orange-200 rounded-lg p-5 pt-10 pb-16 md:p-10 md:py-20 md:mt-12"
  >
    <img
      src="/card/yellow-squares.png"
      class="hidden md:inline-block absolute -mt-32 -mr-40 right-0"
    />
    <div class="grid md:grid-cols-2 gap-6">
      <div class="md:grid md:grid-cols-12 gap-4 mb-8 md:mb-0">
        <div class="col-span-5">
          <h2 class="text-2xl md:text-4xl font-bold pb-5 leading-tight">
            Become a <br class="hidden md:inline-block" />tutor
          </h2>
        </div>
        <div class="col-span-5 pb-5">
          <p class="text-md pb-5 md:pb-2 mt-2">
            Have you been there, done that? Turn your knowledge to cash
          </p>
        </div>
        <div class="col-span-12">
          <button class="btn btn-primary" @click.prevent="(e) => toggleRegister(e, 'tutor')">
            Create tutor account now
          </button>
        </div>
      </div>
      <hr class="md:hidden mb-2" />
      <div class="md:grid md:grid-cols-12 gap-4">
        <div class="col-span-5">
          <h2 class="text-2xl md:text-4xl font-bold pb-5 leading-tight">
            Become a student
          </h2>
        </div>
        <div class="col-span-6 pb-5">
          <p class="text-md pb-5 md:pb-2 mt-2">
            Learn from seasoned experts and turn your insights to cash
          </p>
        </div>
        <div class="col-span-12">
          <button class="btn btn-primary" @click.prevent="(e) => toggleRegister(e, 'student')">
            Create student account now
          </button>
        </div>
      </div>
    </div>
    <img
      src="/card/red-bubbles.png"
      class="hidden md:inline-block absolute -mt-32 -ml-64 left-0"
    />
  </div>
</template>

<script>
export default {
  methods: {
    toggleRegister(e, userType) {
      if (e) e.preventDefault()
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', {
        status: true, 
        type: 'register', 
        userType
      });
    },
  },
}
</script>

<style scoped>
li {
  display: block;
  padding: 5px 0 5px 25px;
  position: relative;
  line-height: 28px;
}
li::before {
  content: '';
  display: inline-block;
  position: absolute;
  border-radius: 6px;
  width: 12px;
  height: 12px;
  left: 0;
  top: 12.5px;
  background: #f99e42;
}
</style>
