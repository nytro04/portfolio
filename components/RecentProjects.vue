<template>
  <div class="recent">
    <h2 class="mb-20 ml-8 text-5xl font-bold md:text-6xl lg:text-7xl md:ml-0">
      Recent <br />
      Projects.
    </h2>

    <div
      class="
        grid grid-cols-1 grid-rows-2
        md:grid-rows-1 md:grid-cols-12
        img-container
      "
      v-for="(project, index) in projects"
      :key="index"
    >
      <img
        class="
          col-start-2 col-end-12
          row-start-1
          pb-10
          md:col-start-1 md:col-end-6 md:pb-0
        "
        :class="tilt(index)"
        :src="require(`~/assets/img/${project.imgUrl}`)"
        :alt="project.name"
      />
      <article
        class="
          col-start-2 col-end-12
          bg-black
          md:col-start-8 md:col-end-13
          content
        "
      >
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
          url: 'https://hope-adoli.netlify.app',
          // url: 'https://uxkafui.co',
          imgUrl: 'hope-adoli.png',
        },
        {
          name: 'Wacommunicate desktop',
          company: 'Walulel Ghana',
          description: `WaCommunicate is Walulel’s Geosocial Communication Platform.`,
          // description: `WaCommunicate is Walulel’s Geosocial Communication Platform. It’s a social network designed for the neighbourhood community.`,
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
        {
          name: 'Bottleport',
          company: 'GrapeAlliance',
          description: `Ecommerce web application for a wines`,
          year: '2021-2023',
          stack: 'Vue3(Setup), Pinia, Typescript TailwindCSS',
          url: 'https://app.bottleport.io',
          imgUrl: 'bottleport.png',
        },
        {
          name: 'Mizormor',
          company: 'Mizormor',
          description: `Website for a Travel and Tour app`,
          year: '2022-2023',
          stack: 'NuxtJs, Javascript, TailwindCSS',
          url: 'https://www.mizormor.com/',
          imgUrl: 'mizormor.png',
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

.content {
  @include respond(phone) {
    margin-top: -5rem;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
</style>
