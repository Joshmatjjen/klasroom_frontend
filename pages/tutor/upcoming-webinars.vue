<template>
  <dash-upcoming-webinars />
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth', 'isTutor'],
}
</script>
