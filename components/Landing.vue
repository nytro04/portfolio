<template>
  <div class="relative grid grid-cols-1 gap-4 overflow-hidden md:grid-cols-12">
    <header class="col-start-1 col-end-13 mt-5 vertical-line">
      <h1 class="header-text">FRANCIS BADASU.</h1>
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
      class="
        block
        grid-flow-col grid-cols-1
        col-start-2 col-end-12
        my-5
        md:my-10 md:grid md:grid-cols-12
        lg:col-start-4
        md:col-end-13
        horizontal-line-1
      "
    >
      <a
        class="
          col-span-6
          text-xs
          lg:col-span-8
          md:col-span-7 md:text-sm
          move-r
          footer-link
        "
        href="https://www.linkedin.com/in/francis-badasu"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.linkedin.com/in/francis-badasu
      </a>
      <a
        class="col-span-7 col-start-9 text-xs md:text-sm move-r footer-link-2"
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
      class="
        relative
        grid-cols-12
        col-start-1 col-end-13
        md:col-start-1 md:col-end-13 md:grid md:gap-16
        landing
        horizontal-line-2
      "
    >
      <h2
        class="
          col-start-1 col-end-13
          text-2xl
          font-bold
          md:col-start-1 md:col-end-6
          lg:text-4xl
          md:text-3xl
          info
        "
      >
        <!-- A Front-End Web Developer based in Accra, Ghana. -->
        A Front-End Web Developer operating from my base in Accra, Ghana.
      </h2>
      <div
        class="
          col-start-6 col-end-11
          mt-10
          mb-20
          details
          md:col-end-12 md:mt-0
          content
          md:mb-0
        "
      >
        <p class="mb-5 md:mb-0">
          I love to translate designs into clean, elegant, functional and
          responsive User Interfaces.
        </p>

        <p class="">
          I have industry experience building websites and web applications
          using HTML, CSS, SCSS, JavaScript, TypeScript, Vue/Vuex, Nuxt,
          React/Redux, NodeJs and Go and quite recently NestJs.
        </p>
      </div>
    </section>

    <section
      class="
        relative
        grid-cols-12
        col-start-1 col-end-12
        row-start-4
        gap-4
        md:row-start-5 md:mt-16 md:grid
        landing
        horizontal-line-3
      "
    >
      <img
        class="col-start-2 col-end-10 mx-auto md:w-full md:mx-0 pic-left"
        src="~/assets/img/hero-img.png"
        alt="Francis Badasu"
      />
      <div
        class="
          col-start-10 col-end-13
          mx-auto
          mt-10
          md:mt-20
          avai
          horizontal-line-4
        "
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

.info {
  @include respond(phone) {
    position: absolute;
    /* bottom: 40rem; */
    top: -25.4rem;
    width: 80%;
    z-index: 5;
  }
}

.pic-left {
  padding-left: 3.37rem;

  @include respond(phone) {
    padding-top: 7rem;
    padding-left: 1.3rem;
    padding-right: 0.4rem;
  }
}

.avai {
  padding-right: 1rem;
  @include respond(phone) {
    display: none;
  }
}

.footer-link {
  @include respond(tab-land) {
    margin-left: 3rem;
  }
  @include respond(tab-port) {
    margin-left: 0;
  }
}

footer {
  @include respond(phone) {
    a {
      padding: 0 1rem;
    }
  }
}

.footer-link-2 {
  margin-left: 0.75rem;

  @include respond(tab-land) {
    margin-left: -0.7rem;
  }
  @include respond(phone) {
    margin-left: 0;
  }
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
    font-size: 4.27rem;
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
