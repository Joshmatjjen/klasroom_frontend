<template>
  <div class="d-block">
    <div class="vote">
      <div class="flex cursor-pointer">
        <img src="/avatar.jpg" class="rounded-lg w-10 h-10 mr-3" />
        <div class="flex-grow my-auto">
          <p class="text-xs text-gray-700 font-bold">Olumide</p>
          <p class="text-xs leading-tight">Admin</p>
        </div>
        <!-- <div v-if="contact.unread" class="flex flex-row mt-auto mb-1">
          <span class="notice">{{ contact.unread }}</span>
        </div> -->
      </div>
      <p class="text-xs text-gray-700 mt-3">
        Which of the following countries have the highest tax rates?
      </p>
      <div class="border border-gray-300 rounded-xl pt-4 px-4 pb-1 mt-5">
        <ul class="mb-0">
          <li
            v-for="(item, key) in votes"
            :key="key"
            :class="{ 'mb-5': key + 1 < votes.length }"
          >
            <label class="checkbox">
              <span class="text-sm">{{ item.name }}</span>
              <input v-model="option" type="radio" :value="item.name" />
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="flex flex-row mt-4 justify-between">
        <div>
          <button
            class="bg-orange-500 py-1 px-4 text-white rounded-md text-xs font-bold"
          >
            Vote
          </button>
        </div>
        <div class="flex flex-row divide-x divide-gray-300 gap-3">
          <span class="text-xs text-gray-600 my-auto">47 votes</span>
          <span class="text-xs text-gray-600 my-auto pl-3">5 mins left</span>
        </div>
      </div>
    </div>
    <hr class="my-5" />
    <div class="results">
      <div class="flex cursor-pointer">
        <img src="/avatar.jpg" class="rounded-lg w-10 h-10 mr-3" />
        <div class="flex-grow my-auto">
          <p class="text-xs text-gray-700 font-bold">Olumide</p>
          <p class="text-xs leading-tight">Admin</p>
        </div>
        <!-- <div v-if="contact.unread" class="flex flex-row mt-auto mb-1">
          <span class="notice">{{ contact.unread }}</span>
        </div> -->
      </div>
      <p class="text-xs text-gray-700 mt-3">
        Which of the following countries have the highest tax rates?
      </p>
      <div class="mt-4">
        <ul class="mb-0">
          <li
            v-for="(item, key) in votes"
            :key="key"
            :class="{ 'mb-5': key + 1 < votes.length }"
          >
            <progress-bar :label="item.name" :percentage="item.score" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: '',
      votes: [
        {
          name: 'Nigeria',
          score: 8,
        },
        {
          name: 'France',
          score: 50,
        },
        {
          name: 'United States',
          score: 32,
        },
      ],
    }
  },
}
</script>
