<template>
  <div>
    <header>
      <div class="pt-24">
        <div class="max-w-xl px-6 mx-auto text-center md:max-w-3xl xl:max-w-4xl">
          <p class="mb-2 text-xs text-gray-700 uppercase">
            {{post.id}}
          </p>
          <h1 class="mb-2 font-sans text-3xl font-bold leading-tight text-black sm:text-5xl">
            {{post.title}}
          </h1>
          <p class="text-gray-700 capitalize">
            {{user.name}}
          </p>
        </div>
      </div>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <router-link :to="{ name: 'Home' }" class="flex items-center justify-center px-4 py-2 text-black bg-white border rounded focus:outline-none hover:bg-gray-100">
          ← Inicio
        </router-link>
      </nav>
    </header>
    <article class="max-w-xl px-6 pt-16 pb-10 mx-auto mb-16 border-b md:max-w-2xl xl:max-w-3xl sm:px-12">
      <div class="py-5 text-lg leading-normal text-gray-700">
        <p> {{post.body}} </p>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SinglePost',
  props: ['id'],
  data() {
    return {
      post: {},
      user: {},
      endpoint: 'https://jsonplaceholder.typicode.com/',
    }
  },

  methods: {
    async fetchPost(id) {
      try {
        const post = await axios(`${this.endpoint}posts/${id}`)
        const user = await axios(`${this.endpoint}users/${post.data.userId}`)
        this.post = post.data
        this.user = user.data
      } catch (ex) {
        console.log(ex)
      }
    },
  },

  watch: {
    $route() {
      this.getPost(this.id)
    },
  },
  created() {
    this.fetchPost(this.id)
  },
}
</script>

<style lang="scss" scoped>
</style>