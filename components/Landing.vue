<template>
  <div class="grid grid-cols-12 gap-4 landing">
    <header class="col-start-1 col-end-12">
      <h1 class="font-bold tracking-widest text-8xl">FRANCIS BADASU.</h1>
    </header>

    <footer class="flex justify-between col-start-3 col-end-10 my-10">
      <p class="">
        <a
          class=""
          href="https://github.com/nytro04"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nytro04
        </a>
      </p>
      <p class="">&copy; 2021. All rights reserved.</p>
    </footer>

    <section class="flex justify-between col-start-1 col-end-11">
      <h3 class="w-2/6 text-3xl">
        A Front-End Web Developer operating from my base in Accra, Ghana.
      </h3>
      <div class="w-1/2 pr-20 text-sm">
        <p>
          I love to translate designs into clean, elegant, functional and
          responsive User Interfaces.
        </p>

        <p class="mt-6">
          I have industry experience building websites and web applications
          using HTML, CSS, SCSS, JavaScript, Vue/Vuex, NuxtJs React/Redux,
          NodeJs and Go and quite recently TypeScript.
        </p>
      </div>
    </section>

    <section class="grid grid-cols-12 col-start-1 col-end-12 gap-4 mt-16">
      <img
        class="col-start-2 col-end-11"
        src="~/assets/img/hero-img.png"
        alt="Francis Badasu"
      />
      <div class="col-start-11 col-end-13 mt-20 text-sm">
        <p class="mb-5">Available for new projects.</p>
        <nuxt-link class="font-semibold btn-bg" to="#">Get in touch</nuxt-link>

        <ScrollDownSvg class="mt-32 ml-32" />
      </div>
    </section>
  </div>
</template>

<script>
import ScrollDownSvg from '~/assets/svgs/scroll-down.svg?inline'
export default {
  name: 'LandingPage',
  components: {
    ScrollDownSvg,
  },
}
</script>

<style lang="scss" scoped>
.landing {
  /* display: grid;
  gap: 1rem;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 8rem 2rem 11rem auto;

  grid-template-areas:
    'head head head head head head '
    '. foot . foot foot foot'
    'about about about about about about'
    'about about about about about about'
    'img img img img img img';

  #name {
    grid-area: head;
  }

  #foot {
    grid-area: foot;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 3rem;

    &p:first-child {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }

  #about {
    grid-area: about;
  }

  #img {
    grid-area: img;
  } */
}
</style>
