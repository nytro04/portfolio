<template>
  <div class="">
    <Landing />
    <div class="mt-32">
      <Stack />
    </div>

    <div class="mt-32 cool">
      <Recent2 />
    </div>

    <div class="mt-32">
      <Together />
    </div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Landing: () => import('~/components/Landing.vue'),
    Stack: () => import('~/components/Stack.vue'),
    // RecentProjects: () => import('~/components/RecentProjects.vue'),
    Recent2: () => import('~/components/Recent2.vue'),
    Together: () => import('~/components/Together.vue'),
    Footer: () => import('~/components/Footer.vue'),
  },
  head() {
    return {
      title: 'Francis Badasu | Portfolio',
    }
  },

  mounted() {
    // this.scrollUp()
  },

  methods: {
    scrollUp() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.trigger',
            start: 'top center',
            end: 'bottom top',
            scrub: true,
            pin: true,
          },
        })
        .to('.trigger', { scale: 0 })
        .from('.cool', { x: innerWidth * -1 })
    },
  },
}
</script>

<style lang="scss" scoped></style>
