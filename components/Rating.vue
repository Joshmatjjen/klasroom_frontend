<template>
  <div class="rating">
    <ul class="list" :class="{ 'mr-4': hasCounter }">
      <li
        v-for="(star, key) in maxStars"
        :key="key"
        :class="{ active: star <= stars }"
        class="star"
        @click="viewOnly ? null : rate(star)"
      >
        <img v-if="star <= stars" src="/rating/star-yellow.svg" />
        <img v-else src="/rating/star-grey.svg" />
        <!-- <i :class=" ? 'fas fa-star' : 'far fa-star'"></i> -->
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Rating',
  props: {
    grade: { type: Number, required: true },
    maxStars: { type: Number, default: 5 },
    hasCounter: { type: Boolean, default: false },
    viewOnly: { type: Boolean, default: true },
  },
  data() {
    return {
      stars: this.grade,
    }
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rating {
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  color: #b7b7b7;
}
.list {
  padding: 0;
}
.star {
  display: inline-block;
  font-size: 42px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.star:first-child {
  margin-left: 0;
}
.list:hover .star {
  color: #ffe100;
}
.star:hover ~ .star:not(.active) {
  color: inherit;
}
.star.active {
  color: #ffe100;
}
.info {
  margin-top: 15px;
  font-size: 40px;
  text-align: center;
  display: table;
}
.divider {
  margin: 0 5px;
  font-size: 30px;
}
.score-max {
  font-size: 30px;
  vertical-align: sub;
}
</style>
