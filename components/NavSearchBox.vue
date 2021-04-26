<template>
  <div>
    <input class="search-box" placeholder="Search a course, webinar or tutor" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-box {
  background-image: url('/icon/search.svg');
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-position: top 14px right 14px;
  padding: 12.5px 50px 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: initial;
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  border-radius: 8px;
  min-width: 100%;
  font-size: 14px;
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
</style>
