<template>
  <div class="flex items-center justify-center md:h-screen together">
    <div class="blast">
      <h1
        class="w-2/3 mx-auto text-3xl font-bold text-center  lg:text-8xl md:text-6xl"
      >
        Together we can do amazing things.
      </h1>
      <a
        href="mailto:nytro04@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-3xl font-bold text-center  blast lg:text-8xl md:text-6xl"
        >Get in touch.</a
      >
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'plain',
}
</script>

<style scoped lang="scss">
@import './assets/scss/abstracts/_mixins.scss';

.together {
  margin: 0 -7.5rem;
  padding: 0 3rem;
  background-color: #000;

  @include respond(tab-land) {
  }
  @include respond(tab-port) {
  }

  @include respond(phone) {
    @apply px-8;
    height: 50vh;
  }
}
</style>
