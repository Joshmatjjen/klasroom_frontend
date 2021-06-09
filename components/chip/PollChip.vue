<template>
  <div class="px-4 md:px-5 lg:px-6 py-4">
    <!-- Question -->
    <div class="form-group mb-5">
      <label for="input-name">Your question {{ id + 1 }}</label>
      <div>
        <input
          id="input-name"
          type="text"
          class="form-input"
          placeholder="eg. What cryptocurrency is worth the most at the moment?"
          v-model="item.question"
          @input="checkFormError('polls')"
        />
      </div>
    </div>
    <hr class="mb-5" />

    <div class="grid grid-cols-2 gap-x-5 gap-y-0">
      <poll-choice-chip
        v-for="(i, key) in item.choices"
        :key="key"
        :id="key"
        :choice="i"
        @update:choice="
          (value) => {
            item.choices[key] = value
          }
        "
        :deleteItem="removeChoice"
        :checkFormError="checkFormError"
      />
    </div>
    <!-- Add New Choice Button -->
    <div
      @click="addChoice"
      class="relative flex items-center justify-center my-10 cursor-pointer"
    >
      <hr class="w-full" />
      <empty-chip :isAbsolute="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M-2.18262 8H7.99972V-2.18234"
              stroke="#8A8A8A"
              stroke-width="1.5"
            />
            <path
              d="M8 18.1821V7.99979H18.1823"
              stroke="#8A8A8A"
              stroke-width="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="text-xs text-center font-thin text-gray-600 pl-2">
          Add new choice
        </p>
      </empty-chip>
    </div>

    <!-- Poll Length -->
    <div class="grid grid-cols-2 gap-x-5 gap-y-0 mb-5">
      <div class="form-group">
        <label :for="'input-duration' + id">Poll length (minutes)</label>
        <!-- <div class="cs-select mb-8">
          <select v-model="item.duration" class="input">
            <option default value="">Select category</option>
          </select>
        </div> -->

        <div>
          <input
            :id="'input-duration' + id"
            type="number"
            class="form-input"
            placeholder=""
            v-model="item.duration"
            @input="checkFormError('polls')"
          />
        </div>
      </div>
    </div>

    <hr v-if="id === 0 && polls.length > 1" class="w-full" />

    <!-- Remove Poll Button -->
    <div
      @click="deleteItem(id)"
      class="relative flex items-center justify-center my-10 cursor-pointer"
      v-if="id > 0"
    >
      <hr class="w-full" />
      <empty-chip :isAbsolute="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.5 7.5H8.75V15H7.5V7.5Z" fill="#545454" />
          <path d="M11.25 7.5H12.5V15H11.25V7.5Z" fill="#545454" />
          <path
            d="M2.5 3.75V5H3.75V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V5H17.5V3.75H2.5ZM5 17.5V5H15V17.5H5Z"
            fill="#545454"
          />
          <path d="M7.5 1.25H12.5V2.5H7.5V1.25Z" fill="#545454" />
        </svg>
        <p class="text-xs text-center font-thin text-gray-600 pl-2">
          Remove Poll
        </p>
      </empty-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: false },
    id: { type: Number, required: false },
    deleteItem: { type: Function, required: false },
    polls: { type: Array, required: false },
    checkFormError: { type: Function, required: false },
  },
  methods: {
    addChoice() {
      this.item.choices = [...this.item.choices, '']
    },
    removeChoice(id) {
      this.item.choices = this.item.choices.filter((i, index) => index !== id)
    },
  },
}
</script>

<style scoped>
.container {
  height: 4.5rem;
}
.action-icon {
  width: 1.3rem;
  height: 1.3rem;
}
.top-tag {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 4px 20px 4px 8px;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 12px;
  position: relative;
}
.top-tag::after {
  content: '';
  display: inline-block;
  border-radius: 4px;
  width: 8px;
  height: 8px;
  right: 6px;
  top: 8px;
  background: #0797ce;
  position: absolute;
}
</style>
