<template>
  <div class="recent">
    <h2 class="mb-20 text-5xl font-bold md:text-6xl lg:text-7xl">
      Recent <br />
      Projects.
    </h2>

    <div
      class="grid grid-cols-12 img-container"
      v-for="(project, index) in projects"
      :key="index"
    >
      <img
        class="col-start-1 col-end-6 pb-10 md:pb-0"
        :class="tilt(index)"
        :src="require(`~/assets/img/${project.imgUrl}`)"
        :alt="project.name"
      />
      <article class="col-start-8 col-end-13 bg-black">
        <h3 class="pb-5 text-xl font-semibold uppercase md:text-2xl">
          {{ project.name }}
        </h3>
        <div class="pb-5 border-b-2 border-white">
          <p class="text-sm">
            {{ project.description }}
          </p>
        </div>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          {{ project.name }} • {{ project.year }}
        </p>
        <p class="py-5 text-sm border-b-2 border-white lg:text-base">
          {{ project.stack }}
        </p>
        <div class="py-5 text-sm border-b-2 border-white lg:text-base">
          <a
            class="move-r"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ project.url }}
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // RecentProjectCard: () => import('~/components/RecentProjectCard.vue'),
    // Project: () => import('~/components/Project.vue'),
    // Together: () => import('~/components/Together.vue'),
  },

  data() {
    return {
      projects: [
        {
          name: 'Hope Adoli',
          company: 'Hope Adoli',
          description: `Built a custom portfolio website for one of Ghana’s best product
                designers`,
          year: '2021',
          stack: 'NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS',
          url: 'https://uxkafui.co',
          imgUrl: 'hope-adoli.png',
        },
        {
          name: 'Wacommunicate desktop',
          company: 'Walulel Ghana',
          description: `WaCommunicate is Walulel’s Geosocial Communication Platform. It’s a social network designed for the neighbourhood community.`,
          year: '2021',
          stack: 'NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS',
          url: 'https://wa-communicate.com',
          imgUrl: 'wacomm.png',
        },
        {
          name: 'Appruve website',
          company: 'Appruve',
          description: `Appruve builds tools to connect Africans to opportunities globally.`,
          year: '2020',
          stack: 'NuxtJS, VueJS/VueXJS, Tachyons CSS, SCSS',
          url: 'https://appruve.co',
          imgUrl: 'appruve-website.png',
        },
        {
          name: 'Appruve Dashboard',
          company: 'Walulel Ghana',
          description: `Build the custom dashboard of Appruve to handle clients businesses`,
          year: '2020',
          stack: 'NuxtJS, VueJS/VueXJS, Tachyons CSS, SCSS',
          url: 'https://dashboard.appruve.co',
          imgUrl: 'appruve-dashboard.png',
        },
      ],
    }
  },

  computed: {
    // tilt() {
    //   return `tilt-${Math.floor(Math.random() * (5 - 1 + 1) + 1)}`
    // },
  },
  methods: {
    tilt(num) {
      return `tilt-${num + 1}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';

.recent {
  @include respond(tab-land) {
  }
  @include respond(tab-port) {
  }

  /* @include respond(phone) {
    @apply px-8 overflow-hidden;
  } */
}
</style>
