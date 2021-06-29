<template>
  <div id="skills" class="stacks">
    <h2 class="mb-5 font-bold text-7xl">Skills</h2>
    <div class="marquee">
      <ul class="marquee-content">
        <li class="flex flex-col">
          <HTMLSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold font">HTML</span>
        </li>
        <li class="flex flex-col">
          <CSSSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">CSS</span>
        </li>
        <li class="flex flex-col">
          <SASSSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">SCSS</span>
        </li>
        <li class="flex flex-col">
          <JSSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">JavaScript</span>
        </li>
        <li class="flex flex-col">
          <VueSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">VueJs</span>
        </li>
        <li class="flex flex-col">
          <NuxtSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">NuxtJs</span>
        </li>
        <li class="flex flex-col">
          <ReactSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">ReactJs</span>
        </li>
        <li class="flex flex-col">
          <TailwindSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">Tailwind CSS</span>
        </li>
        <li class="flex flex-col">
          <BootstrapSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">Bootstrap CSS</span>
        </li>
        <li class="flex flex-col">
          <NodeSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">NodeJs</span>
        </li>
        <li class="flex flex-col">
          <GoSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">Go</span>
        </li>
        <li class="flex flex-col">
          <TypeScriptSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">TypeScript</span>
        </li>
        <li class="flex flex-col">
          <GitSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">Git</span>
        </li>

        <li class="flex flex-col">
          <HTMLSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">HTML</span>
        </li>
        <li class="flex flex-col">
          <CSSSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">CSS</span>
        </li>
        <li class="flex flex-col">
          <SASSSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">SCSS</span>
        </li>
        <li class="flex flex-col">
          <JSSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">JavaScript</span>
        </li>
        <li class="flex flex-col">
          <VueSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">VueJs</span>
        </li>
        <li class="flex flex-col">
          <NuxtSvg class="w-20 h-20" />
          <span class="mt-4 text-lg font-semibold">NuxtJs</span>
        </li>
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
