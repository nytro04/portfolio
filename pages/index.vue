<template>
  <div class="">
    <Landing />
  </div>
</template>

<script>
export default {
  components: {
    Landing: () => import('~/components/Landing.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
