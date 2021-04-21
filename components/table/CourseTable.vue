<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div class="p-4 md:p-5 lg:p-6 pb-16 md:pb-18 lg:pb-20">
      <vue-good-table
        @on-selected-rows-change="selectionChanged"
        :columns="columns"
        :rows="rows"
        row-style-class="vgt-checkbox-col"
        :select-options="{
          enabled: true,
        }"
        :search-options="{ enabled: false }"
        styleClass="vgt-table striped"
      >
        <div slot="selected-row-actions">
          <button>Action 1</button>
        </div>
      </vue-good-table>
    </div>
    <!-- <div v-if="more" class="absolute text-center bottom-0 mb-5 w-full px-5">
      <hr data-v-6cf0f546="" class="mb-4" />
      <nuxt-link :to="more" class="text-gray-700 inline-block">
        <span class="text-xs">See more</span>
      </nuxt-link>
    </div> -->
  </div>
  <!-- <img
    v-for="(item, key) in items"
    :key="key"
    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
    alt="My profile"
    class="course-stacks mr-3"
  /> -->
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    done: { type: String, required: false },
    undone: { type: String, required: false },
    weekSales: { type: String, required: false },
    published: { type: String, required: false },
    webinars: { type: String, required: false },
    more: { type: String, default: null },
  },
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343 },
        {
          id: 2,
          name: 'Jane',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
        {
          id: 3,
          name: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343,
        },
        {
          id: 4,
          name: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343,
        },
        {
          id: 5,
          name: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343,
        },
        {
          id: 6,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
      ],
    }
  },
}
</script>

<style scoped>
.course-stacks {
  display: inline-block;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  @apply bg-gray-300;
}
.vgt-checkbox-col {
  background: '#ffffff' !important;
}
@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
