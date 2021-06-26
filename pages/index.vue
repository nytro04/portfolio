<template>
  <div class="">
    <Landing />
    <div class="mt-32">
      <Stack />
    </div>

    <div class="mt-32">
      <RecentProjects />
    </div>

    <!-- <div class="relative mt-32">
      <Together />
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
    Landing: () => import('~/components/Landing.vue'),
    Stack: () => import('~/components/Stack.vue'),
    RecentProjects: () => import('~/components/RecentProjects.vue'),
    // Together: () => import('~/components/Together.vue'),
  },
  head() {
    return {
      title: 'Francis Badasu | Portfolio Index',
    }
  },
}
</script>

<style lang="scss" scoped></style>
