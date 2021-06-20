<template>
  <div class="stacks">
    <div class="marquee">
      <ul class="marquee-content">
        <li><HTMLSvg class="h-24 w-24" /></li>
        <li><CSSSvg class="h-24 w-24" /></li>
        <li><SASSSvg class="h-24 w-24" /></li>
        <li><JSSvg class="h-24 w-24" /></li>
        <li><VueSvg class="h-24 w-24" /></li>
        <li><NuxtSvg class="h-24 w-24" /></li>
        <li><ReactSvg class="h-24 w-24" /></li>
        <li><TailwindSvg class="h-24 w-24" /></li>
        <li><BootstrapSvg class="h-24 w-24" /></li>
        <li><NodeSvg class="h-24 w-24" /></li>
        <li><GoSvg class="h-24 w-24" /></li>
        <li><TypeScriptSvg class="h-24 w-24" /></li>
        <li><GitSvg class="h-24 w-24" /></li>

        <li><HTMLSvg class="h-24 w-24" /></li>
        <li><CSSSvg class="h-24 w-24" /></li>
        <li><SASSSvg class="h-24 w-24" /></li>
        <li><JSSvg class="h-24 w-24" /></li>
        <li><VueSvg class="h-24 w-24" /></li>
        <li><NuxtSvg class="h-24 w-24" /></li>
      </ul>
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
