<template>
  <div class="create-webinar bg-orange-200 rounded-lg p-10 py-20 mt-12">
    <div class="grid md:grid-cols-12 gap-6 md:gap-10">
      <div class="md:col-span-7 md:pb-56">
        <h2
          class="text-2xl md:text-4xl font-bold pb-0 md:pb-4 leading-8 md:leading-10 lg:pr-32"
        >
          The most seamless way to hold webinars
        </h2>
      </div>
      <div class="md:col-span-5 pb-64 md:pb-0 mb-6 mb:mb-0">
        <ul class="block mb-16">
          <li class="d-block">Host up to 5000 students at once</li>
          <li>Sell tickets to your webinars</li>
          <li>Live chat with students and send private messages</li>
          <li>Record webinars and keep earning from them</li>
          <li>Share files and media with students</li>
          <li>Take polls to get students’ opinions</li>
        </ul>
        <a href="#" @click.prevent="signinCallBackAction" class="btn btn-primary">Create Webinar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signinCallBackAction() {
        
      if (this.$store.getters["auth/user"])
        this.$router.push("/student/webinars/new");

      else
        this.$store.commit('app/LOGIN_MODAL', {
          status: true, 
          type: 'login', 
          userType: 'student',
          callback: () => {
            this.$router.push("/student/webinars/new")
          }
        });
    }
  }
}
</script>

<style scoped>
.create-webinar {
  background-image: url('/card/webinar-screen.png');
  background-repeat: no-repeat;
  background-position: left 0 bottom 0;
}
li {
  display: block;
  padding: 5px 0 5px 25px;
  position: relative;
  line-height: 28px;
}
li::before {
  content: '';
  display: inline-block;
  position: absolute;
  border-radius: 6px;
  width: 12px;
  height: 12px;
  left: 0;
  top: 12.5px;
  background: #f99e42;
}
</style>
