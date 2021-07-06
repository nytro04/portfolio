<template>
  <div class="relative grid grid-cols-1 gap-4 overflow-hidden md:grid-cols-12">
    <!-- <vue-particles
      id="particles-js"
      color="#dedede"
      :particle-opacity="0.5"
      :particles-number="80"
      shape-type="circle"
      :particle-size="4"
      lines-color="#fff"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="6"
      :hover-effect="true"
      hover-mode="repulse"
      :click-effect="true"
      click-mode="push"
    >
    </vue-particles> -->

    <header class="col-start-1 col-end-13 mt-5 vertical-line">
      <h1 class="header-text">FRANCIS BADASU</h1>
      <HeaderImgSvg class="hidden xl:block" />
    </header>
    <div class="vertical-line-2"></div>
    <div class="vertical-line-3"></div>
    <div class="vertical-line-4"></div>
    <div class="vertical-line-5"></div>
    <div class="vertical-line-6"></div>
    <div class="vertical-line-7"></div>
    <!-- <div class="horizontal-line-1"></div> -->
    <!-- <div class="vertical-line-2"></div> -->
    <!-- <header class="col-start-1 col-end-13 mt-5">
      <HeaderImgSvg class="" />
    </header> -->
    <!-- <div class="line-bottom"></div> -->

    <footer
      class="grid grid-flow-row grid-cols-12 col-start-4 col-end-12 my-10  horizontal-line-1"
    >
      <a
        class="col-span-6 text-xs md:text-sm move-r"
        href="https://www.linkedin.com/in/francis-badasu"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.linkedin.com/in/francis-badasu
      </a>
      <a
        class="col-span-5 col-start-9 ml-3 text-xs md:text-sm move-r"
        href="https://github.com/nytro04"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/nytro04
      </a>

      <!-- <p class="text-xs md:text-sm lg:block sm:hidden">
        &copy; 2021. All rights reserved.
      </p> -->
    </footer>
    <!-- <div class="line-bottom"></div> -->

    <section
      class="grid-cols-12 col-start-1 col-end-11  md:grid md:gap-16 landing horizontal-line-2"
    >
      <h2
        class="col-start-1 col-end-6 text-2xl font-bold lg:text-4xl md:text-3xl"
      >
        <!-- A Front-End Web Developer based in Accra, Ghana. -->
        A Front-End Web Developer operating from my base in Accra, Ghana.
      </h2>
      <div class="col-start-6 col-end-11 mt-10 md:mt-0">
        <p class="">
          I love to translate designs into clean, elegant, functional and
          responsive User Interfaces.
        </p>

        <p class="mt-6">
          I have industry experience building websites and web applications
          using HTML, CSS, SCSS, JavaScript, Vue/Vuex, Nuxt, React/Redux, NodeJs
          and Go and quite recently TypeScript.
        </p>
      </div>
    </section>

    <section
      class="grid-cols-12 col-start-1 col-end-12 gap-4 mt-16  md:grid landing horizontal-line-3"
    >
      <img
        class="col-start-2 col-end-10 mx-auto md:w-full md:mx-0 pic-left"
        src="~/assets/img/hero-img.png"
        alt="Francis Badasu"
      />
      <div
        class="col-start-10 col-end-13 mx-auto mt-10  md:mt-20 avai horizontal-line-4"
      >
        <p class="mb-5">Available for new projects.</p>
        <a
          href="mailto:nytro04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-semibold btn-bg"
          >Get in touch</a
        >

        <a href="#skills" class="hidden md:block">
          <ScrollDownSvg
            class="h-10 md:h-16 lg:mt-32 lg:ml-32 sm:mt-16 sm:ml-16"
          />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollDownSvg from '~/assets/svgs/scroll-down.svg?inline'
import HeaderImgSvg from '~/assets/svgs/header-img.svg?inline'
export default {
  name: 'LandingPage',
  components: {
    ScrollDownSvg,
    HeaderImgSvg,
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';

/* #particles-js {
  width: 100%;
  height: 150vh;
  position: absolute;
} */

.landing {
  @include respond(tab-land) {
  }
  @include respond(tab-port) {
  }

  @include respond(phone) {
    @apply px-8;
  }
}

.pic-left {
  padding-left: 3.37rem;
}

.avai {
  padding-right: 1rem;
}

/* .line-bottom {
  border-bottom: 0.1px solid #c5c1c1;
} */

/* .header-svg {
  margin: 0 -7.5rem;
  6.3125
} */

.header-text {
  /* font-weight: 900;
  font-size: 6.1rem;
  letter-spacing: 1rem;
  line-height: 1; */

  font-weight: 900;
  font-size: 7.5rem;
  letter-spacing: 0.32rem;
  line-height: 1;
  display: none;

  @include respond(tab-land) {
    font-size: 5.9rem;
    letter-spacing: 0.2rem;
    display: block;
  }
  @include respond(tab-port) {
    font-size: 4.25rem;
    letter-spacing: 0.2rem;
    display: block;
  }
  @include respond(tab-port) {
    font-size: 3.4rem;
    letter-spacing: 0.2rem;
    display: block;
  }

  @include respond(phone) {
    font-size: 2rem;
    letter-spacing: 0.2rem;
    margin: 0 0.4rem;
    display: block;
  }
}
</style>
