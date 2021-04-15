<template>
  <div class="text-center pt-24 pb-32 max-w-lg mx-auto">
    <div class="font-bold mb-8">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </div>
    <p class="pb-8">
      We can't find the page you're looking for. To find out about how Klasroom
      provides access to seasoned industry experts to learners, head back to our
      homepage.
    </p>
    <nuxt-link to="/" class="btn btn-primary inline-block"
      >Return to Home page</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['error'],
  // layout: 'error', // you can set a custom layout for the error page
}
</script>
