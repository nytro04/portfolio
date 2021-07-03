<template>
  <div
    class="flex items-center justify-center overflow-hidden  md:h-screen together"
  >
    <div class="overflow-hidden text-center">
      <h1
        class="w-2/3 mx-auto overflow-hidden text-3xl font-bold text-center  lg:text-8xl md:text-6xl"
      >
        Together we can do amazing things.
      </h1>
      <a
        href="mailto:nytro04@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-3xl font-bold lg:text-8xl md:text-6xl"
      >
        <span>Get in touch. </span>
      </a>
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

a {
  display: inline-block;
  position: relative;
  text-decoration: none;
  overflow: hidden;
}

span {
  z-index: 5;
  position: relative;
  transition: color 350ms ease;
}
a:hover span {
  color: white;
}

a::after,
a::before {
  content: ' ';
  display: inline-block;
  position: absolute;
  width: 100%;
  top: 35%;
  bottom: 0;
  right: 0;
  left: 0;
  background: #505e4d;
  z-index: -1;
}

a::before {
  /*   background: blue; */
  transform: translateX(-100%);
  z-index: 1;
}

a:hover:before {
  transform: translateX(0);
  transition: transform 350ms ease;
}

a::after {
  z-index: 0;
  transform: translateX(100%);
  transition: none;
  transition: transform 350ms ease;
}

a:hover:after {
  opacity: 1;
  transform: translateX(0);
  transition: transform 350ms 360ms ease;
}
</style>
