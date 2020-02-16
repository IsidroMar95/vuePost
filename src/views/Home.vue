<template>
  <div>
    <header>
      <div class="max-w-xl px-6 py-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32">
        <h1 class="mb-1 font-sans text-4xl font-bold text-black sm:text-5xl md:text-6xl">
          VuePost
        </h1>
        <p class="text-lg text-gray-700 sm:text-3xl">
          Fetching Post con axios ⚡
        </p>
      </div>
    </header>
    <section>
      <div v-for="post in posts" :key="post.id">
        <v-post :post="post"></v-post>
      </div>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VPost from '../components/VPost'
import VFooter from '../components/VFooter'
import axios from 'axios'

export default {
  components: {
    'v-post': VPost,
    'v-footer': VFooter,
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    fetchPost: function() {
      const baseURI =
        'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8'
      axios
        .get(baseURI)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  },

  created() {
    this.fetchPost()
  },
}
</script>
