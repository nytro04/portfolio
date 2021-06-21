<template>
  <div class="recent">
    <h2 class="text-7xl font-bold">
      Recent <br />
      Projects.
    </h2>

    <div class="projects mt-20">
      <div class="grid grid-cols-12 gap-4">
        <img
          class="col-start-1 col-end-7"
          src="~/assets/img/hope-adoli.png"
          alt="Hope Adoli"
        />

        <div
          class="content col-start-8 col-end-13 flex flex-col justify-center"
        >
          <h3 class="text-2xl font-semibold pb-5">HOPE ADOLI</h3>
          <div class="border-white border-b-2 pb-5">
            <p class="text-sm">
              Built a custom portfolio website for one of Ghana’s best product
              designers.
            </p>
          </div>
          <p class="border-white border-b-2 py-5">Hope Adoli • 2021</p>
          <p class="border-white border-b-2 py-5">Nuxt, Vue/VueX, Tailwind</p>
          <p class="border-white border-b-2 py-5">
            <nuxt-link to="#" class="move-r">uxkafui.co</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
}
</style>
