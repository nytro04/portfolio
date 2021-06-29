<template>
  <div class="relative grid grid-cols-12 gap-4 landing">
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

    <header class="col-start-1 col-end-13 mt-5">
      <h1 class="header-text">FRANCIS BADASU</h1>
    </header>
    <!-- <header class="col-start-1 col-end-13 mt-5">
      <HeaderImgSvg class="" />
    </header> -->

    <footer class="flex justify-between col-start-2 col-end-12 my-10">
      <p class="slider">
        <a
          class=""
          href="https://github.com/nytro04"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nytro04
        </a>
      </p>
      <p class="slider">
        <a
          class=""
          href="https://www.linkedin.com/in/francis-badasu"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/francis-badasu
        </a>
      </p>
      <p class="">&copy; 2021. All rights reserved.</p>
    </footer>

    <section class="grid grid-cols-12 col-start-1 col-end-11 gap-4">
      <h3 class="col-start-1 col-end-6 text-4xl">
        A Front-End Web Developer operating from my base in Accra, Ghana.
      </h3>
      <div class="col-start-7 col-end-12">
        <p>
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

    <section class="grid grid-cols-12 col-start-1 col-end-12 gap-4 mt-16">
      <img
        class="col-start-3 col-end-11"
        src="~/assets/img/hero-img.png"
        alt="Francis Badasu"
      />
      <div class="col-start-11 col-end-13 mt-20 text-sm">
        <p class="mb-5">Available for new projects.</p>
        <a
          href="mailto:nytro04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold btn-bg"
          >Get in touch</a
        >

        <a href="#skills">
          <ScrollDownSvg class="mt-32 ml-32" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollDownSvg from '~/assets/svgs/scroll-down.svg?inline'
// import HeaderImgSvg from '~/assets/svgs/header-img.svg?inline'
export default {
  name: 'LandingPage',
  components: {
    ScrollDownSvg,
    // HeaderImgSvg,
  },
}
</script>

<style lang="scss" scoped>
#particles-js {
  width: 100%;
  /* height: calc(100% - 100px); */
  height: 150vh;
  position: absolute;
}

/* .landing {
  border-left: 0.1px solid #c5c5c5;
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
}
</style>
