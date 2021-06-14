<template>
  <div class="min-h-screen mb-24">
    <section>
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              :title="
                pagination ? pagination.count + ' Webinars' : '0 Webinars'
              "
            >
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <webinar-item
                  v-for="(webinar, key) in webinars"
                  :key="key"
                  :webinar="webinar"
                  :session="true"
                  :userType="userDash"
                />
              </div>
            </dash-items-section-group>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getAccessTokenHeader } from '~/utils'

const webinars = require('@/static/json/webinars.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  async fetch() {
    this.$store.commit('app/SET_TITLE', 'Upcoming Webinars')
    try {
      const { data, pagination, metaData } = await this.$axios.$get(
        `https://streaming.staging.klasroom.com/v1/webinars/upcoming`,
        {
          headers: getAccessTokenHeader(this.token),
        }
      )
      console.log('upcoming webinars: ', data)
      this.$store.commit('webinar/FETCH_WEBINAR_SUCCESS', {
        data,
        pagination,
        metaData,
      })
    } catch (err) {
      console.log(err)
    }
  },
  // call fetch only on client-side
  fetchOnServer: false,
  // data: () => ({
  //   webinars: _.take(webinars, 12),
  // }),
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      token: (state) => state.auth.token,
      webinars: (state) =>
        state.webinar.webinars ? state.webinar.webinars.data : [],
      pagination: (state) =>
        state.webinar.webinars ? state.webinar.webinars.pagination : null,
    }),
    userDash() {
      return this.$route.path.split('/')[1]
    },
  },
}
</script>
