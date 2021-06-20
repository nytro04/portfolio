<template>
  <div class="stacks">
    <div class="flex">
      <!-- <div class="flex justify-around space-x-20 flex-nowrap scroller w-1/2"> -->
      <!-- scroller -->
      <!-- <div class=""></div> -->
      <HTMLSvg class="h-24 w-24" />
      <CSSSvg class="h-24 w-24" />
      <SASSSvg class="h-24 w-24" />
      <JSSvg class="h-24 w-24" />
      <VueSvg class="h-24 w-24" />
      <NuxtSvg class="h-24 w-24" />
      <ReactSvg class="h-24 w-24" />
      <TailwindSvg class="h-24 w-24" />
      <BootstrapSvg class="h-24 w-24" />
      <NodeSvg class="h-24 w-24" />
      <GoSvg class="h-24 w-24" />
      <TypeScriptSvg class="h-24 w-24" />
      <GitSvg class="h-24 w-24" />
      <!-- </div> -->
      <!-- <div
        class="ml-8 flex justify-around space-x-20 flex-nowrap scroller w-1/2"
      >
        <HTMLSvg class="h-24 w-24" />
        <CSSSvg class="h-24 w-24" />
        <SASSSvg class="h-24 w-24" />
        <JSSvg class="h-24 w-24" />
        <VueSvg class="h-24 w-24" />
        <NuxtSvg class="h-24 w-24" />
        <ReactSvg class="h-24 w-24" />
        <TailwindSvg class="h-24 w-24" />
        <BootstrapSvg class="h-24 w-24" />
        <NodeSvg class="h-24 w-24" />
        <GoSvg class="h-24 w-24" />
        <TypeScriptSvg class="h-24 w-24" />
        <GitSvg class="h-24 w-24" />
      </div> -->
    </div>
  </div>
</template>

<script>
import HTMLSvg from '~/assets/svgs/html.svg?inline'
import CSSSvg from '~/assets/svgs/css.svg?inline'
import SASSSvg from '~/assets/svgs/sass.svg?inline'
import JSSvg from '~/assets/svgs/js.svg?inline'
import VueSvg from '~/assets/svgs/vue.svg?inline'
import NuxtSvg from '~/assets/svgs/nuxt.svg?inline'
import ReactSvg from '~/assets/svgs/react.svg?inline'
import TailwindSvg from '~/assets/svgs/tailwind.svg?inline'
import BootstrapSvg from '~/assets/svgs/bootstrap.svg?inline'
import NodeSvg from '~/assets/svgs/node.svg?inline'
import GoSvg from '~/assets/svgs/go.svg?inline'
import TypeScriptSvg from '~/assets/svgs/typescript.svg?inline'
import GitSvg from '~/assets/svgs/git.svg?inline'
export default {
  name: 'Stack',
  components: {
    HTMLSvg,
    CSSSvg,
    SASSSvg,
    JSSvg,
    VueSvg,
    NuxtSvg,
    ReactSvg,
    TailwindSvg,
    BootstrapSvg,
    NodeSvg,
    GoSvg,
    TypeScriptSvg,
    GitSvg,
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';

.scroller {
  width: 300%;
  animation: scroll 30s linear infinite;

  /* @include respond(phone) {
    width: 700%;
  } */
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-150%);
  }
}
</style>
