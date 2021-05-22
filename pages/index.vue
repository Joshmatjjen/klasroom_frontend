<template>
  <div>
    <section class="bg-orange-100">
      <div class="container mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-6 px-4 lg:px-0">
            <h1 class="font-bold leading-tight md:mt-20 mt-10 lg:-mr-8">
              <!-- Webinars and courses to up your game 🚀🚀 -->
              <!-- Relevant knowledge to start earning immediately -->
              Learn from the masters and become one.
            </h1>
            <h5 class="mt-10 mb-8 leading-normal">
              Build your business with practical knowledge from Africa’s most
              successful entrepreneurs. Gain insights to industry secrets and
              strategies for building successful businesses in Africa.
            </h5>
            <search-box />
            <div class="mt-8 mb-6 lg:mb-40">
              <span class="text-xs text-gray-700 block mb-4"
                >Popular searches</span
              >
              <tags-slider :tags="tags" />
            </div>
          </div>
          <img
            src="/home-illust.svg"
            class="lg:absolute lg:top-0 right-0 col-span-12 lg:mt-32 xl:mr-6 lg:-mr-16"
          />
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto mt-16 mb-24 px-4 lg:px-0">
        <items-section-group title="Top Categories">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <category-item
              v-for="(category, key) in topCategories"
              :key="key"
              :category="category"
            />
          </div>
        </items-section-group>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <div class="grid grid-cols-2 gap-5">
          <div class="col-span-2">
            <h1 class="leading-none text-gray-700 font-bold text-center mb-8">
              On Klasroom, you can...
            </h1>
          </div>
          <div class="col-span-2 md:col-span-1">
            <icon-card-lg
              icon="/card/course-find-icon.svg"
              title="Take Courses"
              :desc="`Start learning from a wide range of courses from your 
                favorite entrepreneurs. Learn at your own pace and earn a 
                certificate at completion.`"
              link-url="/courses"
              link-text="Find a course"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <icon-card-lg
              :dark="true"
              bg="bg-blue-400"
              icon="/card/webinar-find-icon.svg"
              title="Attend Webinars"
              :desc="`Missed a class or interested in one? Attend webinars 
                led by industry experts on Klasroom. Make your reservations 
                to secure a spot.`"
              link-url="/webinars"
              link-text="Attend webinar"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <icon-card-lg
              :dark="true"
              bg="bg-blue-600"
              icon="/card/course-create-icon.svg"
              title="Create &amp; Sell Courses"
              :desc="`Are you a tutor with wealth of knowledge and experience? 
                Klasroom is the platform for you to reach thousands of 
                learners and earn maximally. Create and sell your 
                pre-recorded courses here.`"
              link-url="/tutor/courses/create"
              link-text="Create a course"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <icon-card-lg
              :dark="true"
              bg="bg-blue-800"
              icon="/card/webinar-create-icon.svg"
              title="Host &amp; Sell Webinars"
              :desc="`Create or host well-loved webinars on Klasroom to a wide 
                variety of audience and expand your stream of income.`"
              link-url="/student/webinars/new"
              link-text="Create a webinar"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <items-section-group title="Latest Courses" more="/courses/latest">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <course-item
              v-for="(course, key) in latestCourses"
              :key="key"
              :course="course"
            />
          </div>
        </items-section-group>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16">
        <why-klasroom />
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <items-section-group title="Trending" more="/trending">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <course-item
              v-for="(course, key) in latestCourses"
              :key="key"
              :course="course"
            />
          </div>
        </items-section-group>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16">
        <create-webinar />
      </div>
    </section>

    <section class="bg-white hidden md:block">
      <div class="container mx-auto my-16">
        <webinars-calendar />
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <div class="grid md:grid-cols-2 gap-5">
          <div>
            <items-section-group title="Top Rated Courses" more="/trending">
              <course-item-wide
                v-for="(course, key) in latestCourses"
                :key="key"
                :course="course"
                class="mb-4"
              />
            </items-section-group>
          </div>
          <div>
            <items-section-group title="Top Rated Webinars" more="/trending">
              <webinar-item-wide
                v-for="(webinar, key) in latestCourses"
                :key="key"
                :webinar="webinar"
                class="mb-4"
              />
            </items-section-group>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <items-section-group title="Latest Webinars" more="/webinars/latest">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <webinar-item
              v-for="(webinar, key) in latestWebinars"
              :key="key"
              :webinar="webinar"
            />
          </div>
        </items-section-group>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16">
        <become-tutor-or-student />
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-20">
        <telegram-community-section />
      </div>
    </section>
  </div>
</template>

<script>
const latestCourses = require('@/static/json/latest-courses.json')
const latestWebinars = require('@/static/json/latest-webinars.json')
const categories = require('@/static/json/top-categories.json')
const tags = require('@/static/json/tags-courses.json')

export default {
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    tags,
    topCategories: categories,
    latestCourses,
    latestWebinars,
  }),
}
</script>
