<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div class="p-4 md:p-5 lg:p-6">
      <vue-good-table
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
                src="/card/upcoming-webinar.png"
                alt="My profile"
                class="course-image mr-3"
              />
              <div class="flex flex-col">
                <span class="text-gray-700 font-semibold text-left text-md">{{
                  props.row.title
                }}</span
                ><span class="text-gray-700 font-normal text-left text-xs">{{
                  props.row.desc
                }}</span>
              </div>
            </div>
          </span>
          <span v-if="props.column.field == 'price'">
            <span class="text-gray-700 font-semibold"
              >₦{{ props.row.price }}</span
            >
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
    columns: { type: Array, required: false },
    rows: { type: Array, required: false },
    // more: { type: String, default: null },
  },
  name: 'webinar-table',
  // data() {
  //   return {
  //     columns: [
  //       {
  //         label: 'Course title',
  //         field: 'courseTitle',
  //       },
  //       {
  //         label: 'Price',
  //         field: 'price',
  //       },
  //       {
  //         label: 'Created On',
  //         field: 'createdAt',
  //         type: 'date',
  //         dateInputFormat: 'yyyy-MM-dd',
  //         dateOutputFormat: 'MMM do yy',
  //       },
  //       {
  //         label: 'Percent',
  //         field: 'score',
  //         type: 'percentage',
  //       },
  //     ],
  //     rows: [
  //       { id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343 },
  //       {
  //         id: 2,
  //         name: 'Jane',
  //         age: 24,
  //         createdAt: '2011-10-31',
  //         score: 0.03343,
  //       },
  //       {
  //         id: 3,
  //         name: 'Susan',
  //         price: 16,
  //         createdAt: '2011-10-30',
  //         score: 0.03343,
  //       },
  //       {
  //         id: 4,
  //         name: 'Chris',
  //         price: 55,
  //         createdAt: '2011-10-11',
  //         score: 0.03343,
  //       },
  //       {
  //         id: 5,
  //         name: 'Dan',
  //         price: 40,
  //         createdAt: '2011-10-21',
  //         score: 0.03343,
  //       },
  //       {
  //         id: 6,
  //         name: 'John',
  //         price: 20,
  //         createdAt: '2011-10-31',
  //         score: 0.03343,
  //       },
  //     ],
  //   }
  // },
}
</script>

<style scoped>
.course-image {
  display: inline-block;
  width: 91px;
  height: 60px;
  @apply bg-gray-300;

  /* border: 1px solid rgba(0, 0, 0, 0.1); */
}

@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
