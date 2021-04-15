<template>
  <div
    class="flex flex-col flex-1 justify-between h-full max-h-screen antialiased"
    :class="{
      'bg-white rounded-xl border border-gray-300 shadow-hover': !noCard,
    }"
  >
    <slot name="header" />
    <div
      ref="scrollbar"
      class="mt-4 mb-0 mx-2 p-3 pt-1 flex flex-col overflow-y-auto scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch"
    >
      <div class="messages space-y-4 pb-4">
        <div class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-2 mr-4 order-2 items-start"
            >
              <div>
                <span class="chat-box recieved-chat-box rounded-xl rounded-bl">
                  <strong>Amina Bello</strong> Can be verified on any platform
                  using docker
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div
              class="flex flex-col space-y-2 text-xs max-w-xs ml-4 mr-0 order-1 items-end"
            >
              <div>
                <span class="chat-box sent-chat-box rounded-xl rounded-br">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>
            <!-- <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            /> -->
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-2 mr-4 order-2 items-start"
            >
              <div>
                <span class="chat-box recieved-chat-box rounded-xl"
                  >Command was run with root privileges. I'm sure about
                  that.</span
                >
              </div>
              <div>
                <span class="chat-box recieved-chat-box rounded-xl"
                  >I've update the description so it's more obviously now</span
                >
              </div>
              <div>
                <span class="chat-box recieved-chat-box rounded-xl"
                  >FYI https://askubuntu.com/a/700266/510172</span
                >
              </div>
              <div>
                <span class="chat-box recieved-chat-box rounded-xl rounded-bl">
                  <strong>SHEGS!!</strong> Check the line above (it ends with a
                  # so, I'm running it asroot)
                  <pre># npm install -g @vue/devtools</pre>
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-4 mr-0 order-1 items-end"
            >
              <div>
                <span class="chat-box sent-chat-box rounded-xl rounded-br">
                  Any updates on this issue? I'm getting the same error when
                  trying to install devtools. Thanks
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-2 mr-4 order-2 items-start"
            >
              <div>
                <span class="chat-box recieved-chat-box rounded-xl rounded-bl">
                  <strong>Somto Agu</strong> Thanks for your message David. I
                  thought I'm alone with this issue. Please, 👍 the issue to
                  support it :)
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-4 mr-0 order-1 items-end"
            >
              <div>
                <span class="chat-box sent-chat-box rounded-xl rounded-br">
                  Are you using sudo?
                </span>
              </div>
              <div>
                <span class="chat-box sent-chat-box rounded-xl rounded-br">
                  Run this command sudo chown -R `whoami` then install the
                  package globally without using sudo</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-2 mr-4 order-2 items-start"
            >
              <div>
                <span class="chat-box recieved-chat-box rounded-xl"
                  >It seems like you are from Mac OS world. There is no /Users/
                  folder on linux 😄</span
                >
              </div>
              <div>
                <span class="chat-box recieved-chat-box rounded-xl rounded-bl"
                  ><strong>Shalewa</strong> I have no issue with any other
                  packages installed with root permission globally.</span
                >
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-4 mr-0 order-1 items-end"
            >
              <div>
                <span class="chat-box sent-chat-box rounded-xl rounded-br"
                  >yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs ml-2 mr-4 order-2 items-start"
            >
              <div>
                <span class="chat-box recieved-chat-box rounded-xl"
                  >I get the same error on Arch Linux (also with sudo)</span
                >
              </div>
              <div>
                <span class="chat-box recieved-chat-box rounded-xl"
                  >I also have this issue, Here is what I was doing until now:
                  #1076</span
                >
              </div>
              <div>
                <span class="chat-box recieved-chat-box rounded-xl rounded-bl"
                  ><strong>Bary White</strong> even i am facing</span
                >
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 pb-4 mb-2 sm:mb-0">
      <div class="relative flex">
        <input
          type="text"
          placeholder="Type message here"
          class="focus:outline-none focus:placeholder-gray-400 placeholder-gray-600"
        />
        <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full h-12 w-12 mr-2 transition duration-500 ease-in-out text-white hover:bg-orange-100 focus:outline-none"
          >
            <img src="/icon/send.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noCard: { type: Boolean, default: false },
  },
  data() {
    return {
      messages: require('@/static/json/messages.json'),
    }
  },
  mounted() {
    const el = this.$refs.scrollbar
    el.scrollTop = el.scrollHeight
  },
}
</script>

<style scoped>
.chat-box {
  @apply py-2 inline-block text-gray-800 text-xs leading-relaxed;
}
.recieved-chat-box {
  background: rgba(249, 158, 66, 0.1);
  @apply px-4;
}
.sent-chat-box {
  background: rgba(241, 243, 242, 0.6);
  @apply px-4;
}
input[type="text"] {
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  @apply w-full text-gray-600 pl-6 pr-16 bg-white rounded-lg py-5;
}
</style>
