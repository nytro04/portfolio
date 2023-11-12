<template>
  <div id="skills" class="stacks">
    <h2 class="mb-5 text-5xl font-bold md:text-6xl lg:text-7xl">Skills</h2>
    <div class="marquee">
      <ul class="marquee-content">
        <li class="flex flex-col">
          <HTMLSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">HTML</span>
        </li>
        <li class="flex flex-col">
          <CSSSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">CSS</span>
        </li>
        <li class="flex flex-col">
          <SASSSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">SCSS</span>
        </li>
        <li class="flex flex-col">
          <JSSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">JavaScript</span>
        </li>
        <li class="flex flex-col">
          <TypeScriptSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">Typescript</span>
        </li>
        <li class="flex flex-col">
          <VueSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">VueJs</span>
        </li>
        <li class="flex flex-col">
          <NuxtSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">NuxtJs</span>
        </li>
        <li class="flex flex-col">
          <ReactSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">ReactJs</span>
        </li>
        <li class="flex flex-col">
          <TailwindSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">Tailwind</span>
        </li>
        <li class="flex flex-col">
          <BootstrapSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">Bootstrap</span>
        </li>
        <li class="flex flex-col">
          <NodeSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">NodeJs</span>
        </li>
        <li class="flex flex-col">
          <GoSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">Go</span>
        </li>
        <li class="flex flex-col">
          <GitSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">Git</span>
        </li>

        <li class="flex flex-col">
          <HTMLSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">HTML</span>
        </li>
        <li class="flex flex-col">
          <CSSSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">CSS</span>
        </li>
        <li class="flex flex-col">
          <SASSSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">SCSS</span>
        </li>
        <li class="flex flex-col">
          <JSSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">JavaScript</span>
        </li>
        <li class="flex flex-col">
          <TypeScriptSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">Typescript</span>
        </li>
        <li class="flex flex-col">
          <VueSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">VueJs</span>
        </li>
        <li class="flex flex-col">
          <NuxtSvg class="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <span class="mt-4 text-xs font-semibold md:text-lg">NuxtJs</span>
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

.stacks {
  @include respond(tab-land) {
  }
  @include respond(tab-port) {
  }

  @include respond(phone) {
    @apply px-8;
  }
}

.scroller {
  width: 300%;
  animation: scroll 30s linear infinite;

  @include respond(phone) {
    width: 700%;
  }
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
