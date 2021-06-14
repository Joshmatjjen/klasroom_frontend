<template>
  <dash-webinar-view />
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth', 'isTutor'],
}
</script>
