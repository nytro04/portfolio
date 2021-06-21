<template>
  <div class="">
    <Landing />
    <div class="mt-32">
      <Stack />
    </div>

    <div class="mt-32">
      <RecentProjects />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Landing: () => import('~/components/Landing.vue'),
    Stack: () => import('~/components/Stack.vue'),
    RecentProjects: () => import('~/components/RecentProjects.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
