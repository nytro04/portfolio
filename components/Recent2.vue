<template>
  <div class="new-recent" @scroll="handleScroll('art1')">
    <div class="grid grid-cols-12 img-container">
      <img
        class="col-start-1 col-end-7 pb-10 md:pb-0"
        :src="require(`~/assets/img/hope-adoli.png`)"
      />
      <article class="col-start-8 col-end-13 bg-black test">
        <h3 class="pb-5 text-xl font-semibold uppercase md:text-2xl">
          Hope Adoli
        </h3>
        <div class="pb-5 border-b-2 border-white">
          <p class="text-sm">
            Built a custom portfolio website for one of Ghana’s best product
            designers
          </p>
        </div>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          Hope Adoli • 2021
        </p>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS
        </p>
        <div class="py-5 text-sm border-b-2 border-white lg:text-base">
          <a
            class="move-r"
            href="https://uxkafui.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://uxkafui.co
          </a>
        </div>
      </article>
    </div>
    <div class="grid grid-cols-12 img-container">
      <img
        class="col-start-1 col-end-7 pb-10 md:pb-0"
        :src="require(`~/assets/img/wacomm.png`)"
      />
      <article ref="art2" class="col-start-8 col-end-13 bg-black test">
        <h3 class="pb-5 text-xl font-semibold uppercase md:text-2xl">
          Second text
        </h3>
        <div class="pb-5 border-b-2 border-white">
          <p class="text-sm">
            Built a custom portfolio website for one of Ghana’s best product
            designers
          </p>
        </div>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          Hope Adoli • 2021
        </p>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS
        </p>
        <div class="py-5 text-sm border-b-2 border-white lg:text-base">
          <a
            class="move-r"
            href="https://uxkafui.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://uxkafui.co
          </a>
        </div>
      </article>
    </div>
    <div class="grid grid-cols-12 img-container">
      <img
        class="col-start-1 col-end-7 pb-10 md:pb-0"
        :src="require(`~/assets/img/appruve-website.png`)"
      />
      <article ref="art3" class="col-start-8 col-end-13 bg-black">
        <h3 class="pb-5 text-xl font-semibold uppercase md:text-2xl">
          theris blasss
        </h3>
        <div class="pb-5 border-b-2 border-white">
          <p class="text-sm">
            Built a custom portfolio website for one of Ghana’s best product
            designers
          </p>
        </div>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          Hope Adoli • 2021
        </p>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS
        </p>
        <div class="py-5 text-sm border-b-2 border-white lg:text-base">
          <a
            class="move-r"
            href="https://uxkafui.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://uxkafui.co
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastScrollPosition: 0,
      showArticle: true,
    }
  },
  beforeMount() {
    // if (process.client) {
    window.addEventListener('scroll', this.handleScroll)
    // }
  },
  beforeDestroy() {
    // if (process.client) {
    window.removeEventListener('scroll', this.handleScroll)
    // }
  },
  methods: {
    handleScroll(refName) {
      // const article = this.$refs[refName]
      if (refName === 'art1') {
        console.log('got here')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';


</style>
