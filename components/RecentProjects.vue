<template>
  <div class="recent">
    <h2 class="mb-20 text-5xl font-bold md:mb-0 md:text-6xl lg:text-7xl">
      Recent <br />
      Projects.
    </h2>

    <section class="philosophie">
      <div class="wrapper">
        <!-- <div class="indicators"> -->
          <!-- <div class="indicator"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
          <div class="indicator"></div> -->
          <!-- <div class="indicator"></div> -->
        <!-- </div> -->

        <Project
          :name="hope.name"
          :company="hope.company"
          :description="hope.description"
          :year="hope.year"
          :stack="hope.stack"
          :url="hope.url"
          :img-url="hope.imgUrl"
        />
        <Project
          :name="wacomm.name"
          :description="wacomm.description"
          :year="wacomm.year"
          :stack="wacomm.stack"
          :url="wacomm.url"
          :img-url="wacomm.imgUrl"
        />
        <Project
          :name="appruveWebsite.name"
          :description="appruveWebsite.description"
          :year="appruveWebsite.year"
          :stack="appruveWebsite.stack"
          :url="appruveWebsite.url"
          :img-url="appruveWebsite.imgUrl"
        />
        <Project
          :name="appruveDashboard.name"
          :description="appruveDashboard.description"
          :year="appruveDashboard.year"
          :stack="appruveDashboard.stack"
          :url="appruveDashboard.url"
          :img-url="appruveDashboard.imgUrl"
        />
      </div>
      <!-- <Together /> -->
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Project: () => import('~/components/Project.vue'),
    // Together: () => import('~/components/Together.vue'),
  },

  data() {
    return {
      hope: {
        name: 'Hope Adoli',
        company: 'Hope Adoli',
        description: `Built a custom portfolio website for one of Ghana’s best product
                designers`,
        year: '2021',
        stack: 'NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS',
        url: 'https://uxkafui.co',
        imgUrl: 'hope-adoli.png',
      },
      wacomm: {
        name: 'Wacommunicate desktop',
        company: 'Walulel Ghana',
        description: `WaCommunicate is Walulel’s Geosocial Communication Platform. It’s a social network designed for the neighbourhood community.`,
        year: '2021',
        stack: 'NuxtJS, VueJS/VueXJS, Tailwind CSS, SCSS',
        url: 'https://wa-communicate.com',
        imgUrl: 'wacomm.png',
      },
      appruveWebsite: {
        name: 'Appruve website',
        company: 'Appruve',
        description: `Appruve builds tools to connect Africans to opportunities globally.`,
        year: '2020',
        stack: 'NuxtJS, VueJS/VueXJS, Tachyons CSS, SCSS',
        url: 'https://appruve.co',
        imgUrl: 'appruve-website.png',
      },
      appruveDashboard: {
        name: 'Appruve Dashboard',
        company: 'Walulel Ghana',
        description: `Build the custom dashboard of Appruve to handle clients businesses`,
        year: '2020',
        stack: 'NuxtJS, VueJS/VueXJS, Tachyons CSS, SCSS',
        url: 'https://dashboard.appruve.co',
        imgUrl: 'appruve-dashboard.png',
      },
    }
  },

  mounted() {
    this.coolanimation()
  },
  methods: {
    coolanimation() {
      ScrollTrigger.defaults({
        // markers: false,
      })

      const points = gsap.utils.toArray('.point')
      const indicators = gsap.utils.toArray('.indicator')

      const height = 100 * points.length

      gsap.set('.indicators', { display: 'flex' })

      const tl = gsap.timeline({
        duration: points.length,
        scrollTrigger: {
          trigger: '.philosophie',
          start: 'top center',
          end: '+=' + height + '%',
          scrub: true,
          id: 'points',
        },
      })

      // eslint-disable-next-line no-unused-vars
      const pinner = gsap.timeline({
        scrollTrigger: {
          trigger: '.philosophie .wrapper',
          start: 'top top',
          end: '+=' + height + '%',
          scrub: true,
          pin: '.philosophie .wrapper',
          pinSpacing: true,
          id: 'pinning',
          // markers: true,
        },
      })

      points.forEach(function (elem, i) {
        gsap.set(elem, { position: 'absolute', top: 0 })

        tl.to(indicators[i], { backgroundColor: 'orange', duration: 0.25 }, i)
        tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i)
        tl.from(
          elem.querySelector('article'),
          { autoAlpha: 0, translateY: 100 },
          i
        )

        if (i !== points.length - 1) {
          tl.to(
            indicators[i],
            { backgroundColor: '#adadad', duration: 0.25 },
            i + 0.75
          )
          tl.to(
            elem.querySelector('article'),
            { autoAlpha: 0, translateY: -100 },
            i + 0.75
          )
          tl.to(elem.querySelector('img'), { autoAlpha: 0 }, i + 0.75)
        }
      })
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

  @include respond(phone) {
    @apply px-8 overflow-hidden;
  }
}

.philosophie {
  position: relative;
  overflow: hidden;
}

/* .indicators {
  left: 0;
  top: 0;
  margin: 10vh 0;
  height: 80vh;
  width: 3px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
} */

/* .indicator {
  width: 100%;
  background-color: #adadad;
  flex-grow: 1;
  margin: 2px 0;
} */

.philosophie .point {
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 4rem;
  justify-content: center;
  align-content: center;
  overflow: hidden;

  /* width: 100%; */

  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem; */

  @include respond(tab-land) {
    height: 60vh;
  }
  @include respond(tab-port) {
    height: 60vh;
  }

  @include respond(phone) {
    display: block;
  }
}

.philosophie .wrapper {
  height: 80vh;
  width: 100%;
  overflow: hidden;

  @include respond(tab-land) {
    height: 60vh;
  }
  @include respond(tab-port) {
    height: 60vh;
  }

  @include respond(phone) {
  }
}

.point article {
  grid-column-start: 8;
  grid-column-end: 13;
  overflow: hidden;
  margin: auto 0;
}

.point img {
  grid-column-start: 1;
  grid-column-end: 7;
  margin-left: 2rem;
  overflow: hidden;
  @include respond(phone) {
    margin-left: 0;
  }
}
</style>
