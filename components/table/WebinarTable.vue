<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div
      class="fixed"
      :class="{ hidden: !opt }"
      :style="{
        width: '100%',
        height: '100vh',
        zIndex: 2,
        marginTop: '-22rem',
        marginLeft: '-130px',
      }"
      @click="toggleMenu"
    ></div>
    <div class="p-4 md:p-5 lg:p-6 overflow-x-auto">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        row-style-class="vgt-checkbox-col table-row"
        :select-options="{
          enabled: true,
        }"
        :search-options="{ enabled: false }"
        styleClass="vgt-table vgt-wrap striped"
      >
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
          <span v-else-if="props.column.field == 'price'">
            <span class="text-gray-700 font-semibold"
              >₦{{ props.row.price }}</span
            >
          </span>
          <span v-else-if="props.column.field == 'createdAt'">
            <div class="flex flex-row gap-4 items-center justify-end relative">
              <span class="text-gray-700 font-normal text-left text-xs pr-10">{{
                props.row.createdAt
              }}</span>
              <span
                @click="toggleMenu(props.row.id)"
                class="absolute text-gray-700 cursor-pointer hover:text-gray-900 font-extrabold text-left text-md"
                >&#xFE19;</span
              >
              <div
                :class="{
                  hidden: opt && props.row.id === optId ? false : true,
                }"
                class="pop-up flex flex-col items-start p-2 justify-around pop-up absolute top-0 mt-5 border-gray-500 bg-white rounded-lg h-32 w-32 shadow-lg"
                :style="{ zIndex: 3 }"
              >
                <a
                  href="#"
                  class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Edit webinar</p>
                </a>
                <a
                  href="#"
                  class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Delete</p>
                </a>
                <a
                  href="#"
                  class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Share</p>
                </a>
                <a
                  href="#"
                  class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Preview</p>
                </a>
                <!-- <a
                href="#"
                class="pop-up-item lg:mr-4 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="(e) => toggleLogin(e, 'student')"
              >
                Become a student
              </a> -->
                <!-- <a
                href="#"
                class="pop-up-item lg:mr-4 md:text-gray-700 text-sm md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="(e) => toggleRegister(e, 'tutor')"
              >
                <p>Become a tutor</p>
              </a> -->
              </div>
            </div>
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
  data: () => ({
    opt: false,
    optId: null,
  }),
  methods: {
    toggleMenu(optId) {
      this.opt = !this.opt
      if (optId) this.optId = optId
    },
  },
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

.pop-up {
  border-width: 0.1rem;
}
.vgt-wrap {
  min-width: 60rem;
  overflow-x: scroll;
}

@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
