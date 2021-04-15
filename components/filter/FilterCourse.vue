<template>
  <div>
    <h5 class="title mb-5">Filter</h5>
    <p class="sub-title mb-4">Difficulty</p>
    <ul class="mb-8">
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">Beginner</span>
          <input v-model="difficulty" type="checkbox" value="beginner" />
          <span class="checkmark"></span>
        </label>
      </li>
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">Intermediate</span>
          <input v-model="difficulty" type="checkbox" value="intermediate" />
          <span class="checkmark"></span>
        </label>
      </li>
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">Advanced</span>
          <input v-model="difficulty" type="checkbox" value="advanced" />
          <span class="checkmark"></span>
        </label>
      </li>
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">All</span>
          <input v-model="difficulty" type="checkbox" value="all" />
          <span class="checkmark"></span>
        </label>
      </li>
    </ul>
    <p class="sub-title mb-4">Price</p>
    <ul class="mb-8">
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">Free</span>
          <input v-model="price" type="checkbox" value="free" />
          <span class="checkmark"></span>
        </label>
      </li>
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">Paid</span>
          <input v-model="price" type="checkbox" value="paid" />
          <span class="checkmark"></span>
        </label>
      </li>
      <li class="mb-5">
        <label class="checkbox">
          <span class="text-sm">All</span>
          <input v-model="price" type="checkbox" value="all" />
          <span class="checkmark"></span>
        </label>
      </li>
    </ul>
    <p class="sub-title mb-2">Duration</p>
    <div class="mb-8">
      <input
        v-model="duration"
        type="text"
        placeholder="Select course duration"
        class="input"
      />
    </div>
    <p class="sub-title mb-2">Category</p>
    <div class="cs-select mb-8">
      <select v-model="tutor" class="input">
        <option value="">Select category</option>
      </select>
    </div>
    <p class="sub-title mb-2">Tutor</p>
    <div class="mb-0">
      <input
        v-model="tutor"
        type="text"
        placeholder="Select tutor"
        class="input"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    difficulty: [],
    price: [],
    duration: null,
    category: '',
    tutor: '',
  }),
}
</script>

<style scoped>
.title {
  @apply flex-grow font-semibold text-gray-600;
}
.sub-title {
  @apply text-gray-800 text-sm font-semibold;
}
ul {
  max-width: 180px;
}
label.checkbox {
  padding-left: 0 !important;
}
label.checkbox .checkmark {
  right: 0 !important;
  left: auto !important;
}
.input {
  border-radius: 12px !important;
}
</style>
