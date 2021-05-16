<template>
  <div>
    <input
      :class="small ? 'small-search-box' : 'search-box'"
      :placeholder="
        placeholder ? placeholder : 'Search a course, webinar or tutor'
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: '' },
    small: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.search-box {
  background-image: url('/icon/search.svg');
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-position: top 25px right 20px;
  padding: 22px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  border-radius: 8px;
  min-width: 100%;
  outline: none;
}
@media only screen and (max-width: 640px) {
  .search-box {
    background-position: top 15px right 15px;
    padding: 15px 20px;
    box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
    border-radius: 8px;
    min-width: 100%;
    @apply text-xs;
  }
}

.small-search-box {
  background-image: url('/icon/search.svg');
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-position: top 15px right 20px;
  padding: 10px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  border-radius: 8px;
  min-width: 100%;
  outline: none;
  font-size: 1rem;
}
@media only screen and (max-width: 640px) {
  .small-search-box {
    background-position: top 15px right 15px;
    padding: 15px 20px;
    box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
    border-radius: 8px;
    min-width: 100%;
    @apply text-xs;
  }
}
</style>
