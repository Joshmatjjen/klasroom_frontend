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
    <div class="p-1 md:p-5 lg:p-6 overflow-x-auto">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        row-style-class="vgt-checkbox-col table-row"
        :select-options="{
          enabled: true,
          selectOnCheckboxOnly: true,
        }"
        :search-options="{ enabled: false }"
        styleClass="vgt-table vgt-wrap vgt-right-align striped"
      >
        <template slot="table-row" slot-scope="props">
          <nuxt-link
            :to="'/tutor/webinars/preview/' + props.row.title"
            class="relative"
          >
            <span
              v-if="props.column.field == 'webinarTitle'"
              class=""
              :class="onDraft && 'flex flex-row justify-between'"
            >
              <div class="flex flex-row max-w-md">
                <img
                  v-if="!onDraft"
                  src="/card/upcoming-webinar.png"
                  alt="My profile"
                  class="course-image mr-3"
                />
                <div
                  v-if="onDraft"
                  class="course-image mr-3"
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }"
                >
                  <img src="/icon/empty-pics-icon.svg" alt="My profile" />
                </div>
                <div class="flex flex-col">
                  <span class="text-gray-700 font-semibold text-left text-md">{{
                    props.row.title
                  }}</span
                  ><span class="text-gray-700 font-normal text-left text-xs">{{
                    props.row.desc
                  }}</span>
                </div>
              </div>
              <!-- Draft for webinar Start -->
              <div
                v-if="onDraft && props.column.field == 'webinarTitle'"
                class="flex flex-row gap-5 items-center justify-end relative"
              >
                <div class="bg-gray-300 w-16 h-5 rounded-xl"></div>
                <div class="bg-gray-300 w-16 h-5 rounded-xl"></div>
                <div class="bg-gray-300 w-16 h-5 rounded-xl"></div>
              </div>
              <span
                v-if="onDraft && props.column.field == 'webinarTitle'"
                class="flex flex-row gap-10"
              >
                <div
                  class="flex flex-row gap-4 items-center justify-end relative"
                >
                  <div class="btn btn-light btn-sm lg:mt-0 cursor-pointer">
                    Keep editing
                  </div>
                  <img src="/delete.svg" class="cursor-pointer" />
                </div>
              </span>
              <!-- Draft for webinar End -->
            </span>
            <span v-else-if="props.column.field == 'price'">
              <span class="text-gray-700 font-semibold"
                >₦{{ props.row.price }}</span
              >
            </span>
            <span v-else-if="props.column.field == 'rating'">
              <rating :grade="props.row.rating" :viewOnly="true" />
            </span>

            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
            <span
              v-if="
                props.column.field == 'date' || props.column.field == 'heldOn'
              "
            >
              <div
                class="flex flex-row gap-10 items-center justify-end relative"
              >
                <span
                  v-on:click.prevent="toggleMenu(props.row.id)"
                  class="absolute z-50 bottom-0 -mb-1 right-0 -mr-2 text-gray-600 cursor-pointer hover:text-gray-900 font-extrabold text-left text-lg"
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
                </div>
              </div>
            </span>
          </nuxt-link>
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
    onDraft: { type: Boolean, required: false },
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
  min-width: 58rem;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0.5rem;
}
.vgt-right-align > a > span {
  /* pr-10 */
  @apply text-gray-700 font-normal text-left text-xs pr-5;
}

@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
