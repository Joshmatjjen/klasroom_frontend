<template>
  <dash-webinar />
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
}
</script>
