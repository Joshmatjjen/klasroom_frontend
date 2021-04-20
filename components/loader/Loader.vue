<template>
  <svg :class="`animate-spin h-5 w-5 ml-2 rounded-full inline text-${color} stroke-current stroke-2`" viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
    ></circle>
  </svg>
</template>

<script>
  export default {
    props: {
      color: { type: String, required: true },
    },
  }
</script>