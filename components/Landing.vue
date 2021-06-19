<template>
  <div class="landing">
    <header>
      <h1 class="name heading heading__primary">FRANCIS BADASU.</h1>
    </header>

    <footer id="foot">
      <p>
        <a
          class=""
          href="https://github.com/nytro04"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nytro04
        </a>
      </p>
      <p>&copy; 2021. All rights reserved.</p>
    </footer>

    <section id="about">
      <h3>A Front-End Web Developer operating from my base in Accra, Ghana.</h3>
      <div>
        <p>
          I love to translate designs into clean, elegant, functional and
          responsive User Interfaces.
        </p>

        <p>
          I have industry experience building websites and web applications
          using HTML, CSS, SCSS, JavaScript, Vue/Vuex, NuxtJs React/Redux,
          NodeJs and Go and quite recently TypeScript.
        </p>
      </div>
    </section>

    <section id="img">
      <img src="~/assets/img/hero-img.png" alt="Francis Badasu" />
      <div class="">
        <p>Available for new projects.</p>
        <nuxt-link to="#">Get in touch</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import CloseSvg from '~/assets/svgs/x.svg?inline'
export default {}
</script>

<style lang="scss" scoped>
.landing {
  display: grid;

  /* you can use 12 instead 6 cols, for easy manipulations, that's why bootstrap 12cols */
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 4rem;
  /* use this if need be to specify each row  */
  /* 70px 55px 55px minmax(80px, auto) 80px 55px 80px 80px 70px; */

  grid-template-areas:
    'name name name name name name'
    '. foot foot foot foot .'
    'about about . about about .'
    'about about . about about .'
    '. img img img img img';

  #name {
    grid-area: name;
  }

  #foot {
    grid-area: foot;
  }

  #about {
    grid-area: about;
  }

  #img {
    grid-area: img;
  }
}
</style>
