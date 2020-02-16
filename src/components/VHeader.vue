<template>
  <header>
    <div class="max-w-xl px-6 py-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-24">
      <slot name="header"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
}
</script>