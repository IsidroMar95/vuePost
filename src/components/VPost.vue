<template>
  <article class="max-w-3xl px-6 mx-auto">
    <div class="py-8 border-b border-gray-300 sm:py-20">
      <header class="mb-8 text-center">
        <span class="mb-2 text-xs text-gray-700 uppercase">
          {{post.id}}
        </span>
        <h2 class="mb-1 font-sans text-3xl leading-tight sm:mb-2">
          <router-link class="font-bold text-black" :to="{ name: 'post', params: { id: post.id } }">
            {{post.title}}
          </router-link>
        </h2>
      </header>
      <p class="px-2 text-lg leading-normal text-gray-700 sm:px-4 md:px-10">
        {{post.body}}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VPost',
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
}
</script>
