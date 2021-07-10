<template>
  <div class="">
    <Landing />
    <div class="mt-20 md:mt-32">
      <Stack />
    </div>

    <div class="mt-20 md:mt-32">
      <RecentProjects />
    </div>

    <div class="mt-10 mb-10 md:mt-32">
      <Together />
    </div>
    <div class="pb-20">
      <Footer />
    </div>
  </div>
</template>

<script>
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

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
