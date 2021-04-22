<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div class="p-4 md:p-5 lg:p-6">
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
        <!-- <div slot="selected-row-actions">
          <button>Action 1</button>
        </div> -->
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'courseTitle'">
            <div class="flex flex-row max-w-md">
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="course-image mr-3"
              />
              <div class="flex flex-col">
                <span class="text-gray-700 font-bold text-left text-lg">{{
                  'Introduction to Modern Business'
                }}</span
                ><span class="text-gray-700 font-normal text-left text-xs">{{
                  'Anyone who lived in the time of legends such as Henry Ford, Alexander Graham Bell, Thom..'
                }}</span>
              </div>
            </div>
          </span>
          <span v-if="props.column.field == 'price'">
            <span class="text-gray-700 font-bold">₦{{ props.row.price }}</span>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
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
    title: { type: String, required: false },
    items: { type: Array, required: false },
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
          label: 'Course title',
          field: 'courseTitle',
        },
        {
          label: 'Price',
          field: 'price',
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
          price: 16,
          createdAt: '2011-10-30',
          score: 0.03343,
        },
        {
          id: 4,
          name: 'Chris',
          price: 55,
          createdAt: '2011-10-11',
          score: 0.03343,
        },
        {
          id: 5,
          name: 'Dan',
          price: 40,
          createdAt: '2011-10-21',
          score: 0.03343,
        },
        {
          id: 6,
          name: 'John',
          price: 20,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
      ],
    }
  },
}
</script>

<style scoped>
.course-image {
  display: inline-block;
  width: 91px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  @apply bg-gray-300;
}

@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
