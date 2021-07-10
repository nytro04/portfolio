<template>
  <div class="">
    <Landing />
    <div class="mt-20 overflow-x-hidden md:mt-32">
      <Stack />
    </div>

    <div class="mt-20 md:mt-32">
      <RecentProjects />
    </div>

    <div class="mb-10 overflow-x-hidden md:mt-10">
      <Together />
    </div>
    <div class="pb-10 overflow-x-hidden">
      <Footer />
    </div>
  </div>
</template>

<script>
// import { checkScroll } from '~/assets/js/findScroll'
export default {
  components: {
    Landing: () => import('~/components/Landing.vue'),
    Stack: () => import('~/components/Stack.vue'),
    RecentProjects: () => import('~/components/RecentProjects.vue'),

    Together: () => import('~/components/Together.vue'),
    Footer: () => import('~/components/Footer.vue'),
  },
  head() {
    return {
      title: 'Francis Badasu | Portfolio',
    }
  },

  mounted() {
    // checkScroll()
  },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
