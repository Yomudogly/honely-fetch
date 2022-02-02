<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"
          >
            OUR USERS
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero
            eros, sagittis vel risus sit amet, eleifend blandit mauris. Fusce eu
            rutrum metus. Aenean vulputate iaculis lorem, quis mattis neque
            dapibus et. Ut in sollicitudin enim. Vestibulum pulvinar nulla nec
            aliquet condimentum. Cras vitae odio id turpis maximus vulputate vel
            at lectus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nulla posuere consectetur ligula. Donec turpis neque,
            tincidunt sed pulvinar ut, consectetur eget velit.
          </p>
        </div>
        <div
          v-if="$store.state.loading"
          class="flex flex-wrap m-4 justify-center"
        >
          <content-placeholders
            v-for="(item, i) in 4"
            :key="i"
            :rounded="true"
            class="p-4 lg:w-1/2"
          >
            <content-placeholders-img />
            <content-placeholders-heading />
            <content-placeholders-text :lines="1" />
          </content-placeholders>
        </div>
        <div v-else class="flex flex-wrap m-4">
          <div
            v-for="(user, index) in users"
            :key="index"
            class="p-4 lg:w-1/2 cursor-pointer"
            @click="getUserInfo(index)"
          >
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  {{ user.name }}
                </h2>
                <h3 class="text-gray-500 mb-3">{{ user.username }}</h3>
                <p class="mb-4">
                  {{
                    `${user.address.street} ${user.address.suite},  ${
                      user.address.city
                    }, ${user.address.zipcode.substring(0, 5)}`
                  }}
                </p>
                <span class="inline-flex">
                  <p class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </p>
                  <p class="ml-2">
                    {{ user.email }}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    users: {
      get() {
        return this.$store.state.users
      },
    },
  },
  created() {
    this.$store.dispatch('onUpdateAllUsers').catch((error) => {
      alert(error)
    })
  },
  methods: {
    getUserInfo(index) {
      console.dir(this.users[index])
    },
  },
}
</script>
<style>
html {
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  height: -webkit-fill-available;
}
</style>
