<template>
  <div class="">
    <Landing />
    <div class="mt-20">
      <Stack />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Landing: () => import('~/components/Landing.vue'),
    Stack: () => import('~/components/Stack.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
