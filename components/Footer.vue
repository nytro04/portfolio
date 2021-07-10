<template>
  <div
    class="items-center pb-10 mx-auto text-sm text-center  md:text-base md:justify-between md:flex footer"
  >
    <a
      class="py-2 text-sm md:text-base"
      href="https://www.linkedin.com/in/francis-badasu"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.linkedin.com/in/francis-badasu
    </a>

    <a
      class="text-sm md:text-base"
      href="https://github.com/nytro04"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://github.com/nytro04
    </a>

    <a
      class="text-sm underline md:text-base"
      href="https://uxkafui.co"
      target="_blank"
      rel="noopener noreferrer"
      >Designed by this guy
    </a>

    <p class="py-2 text-sm md:text-base">&copy; 2021. All rights reserved.</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import './assets/scss/abstracts/_mixins.scss';

.footer {
  margin: 0 -7.5rem;
  padding: 0 3rem;
  background-color: #000;
  height: 10vh;

  @include respond(tab-land) {
  }
  @include respond(tab-port) {
  }

  @include respond(phone) {
    @apply px-8;
    height: 20vh;
  }

  @include respond(phone) {
    a {
      display: block;
    }
  }
}
</style>
