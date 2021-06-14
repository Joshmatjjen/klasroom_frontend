<template>
  <dash-webinar-preview />
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
}
</script>
