<template>
  <div class="recent">
    <h2 class="font-bold text-7xl">
      Recent <br />
      Projects.
    </h2>

    <section class="philosophie">
      <div class="wrapper">
        <div class="indicators">
          <div class="indicator"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
          <!-- <div class="indicator"></div> -->
        </div>
        <!-- <div class="point">
          <img
            class="col-start-1 col-end-7 box1"
            src="~/assets/img/hope-adoli.png"
            alt="Hope Adoli"
          />
          <article>
            <h3 class="pb-5 text-2xl font-semibold">HOPE ADOLI</h3>
            <div class="pb-5 border-b-2 border-white">
              <p class="text-sm">
                Built a custom portfolio website for one of Ghana’s best product
                designers.
              </p>
            </div>
            <p class="py-5 border-b-2 border-white">Hope Adoli • 2021</p>
            <p class="py-5 border-b-2 border-white">Nuxt, Vue/VueX, Tailwind</p>
            <p class="py-5 border-b-2 border-white">
              <nuxt-link to="#" class="move-r">uxkafui.co</nuxt-link>
            </p>
          </article>
        </div> -->
        <!-- <div class="point"> -->
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
  },

  data() {
    return {
      hope: {
        name: 'Hope Adoli',
        company: 'Hope Adoli',
        description: `Built a custom portfolio website for one of Ghana’s best product
                designers`,
        year: '2021',
        stack: 'NuxJSt, VueJS/VueXJS, Tailwind CSS',
        url: 'https://uxkafui.co',
        imgUrl: 'hope-adoli.png',
      },
      wacomm: {
        name: 'Wacommunicate desktop',
        company: 'Walulel Ghana',
        description: `WaCommunicate is Walulel’s Geosocial Communication Platform. It’s a social network designed for the neighbourhood community.`,
        year: '2021',
        stack: 'NuxtJS, VueJS/VueXJS, Tailwind CSS',
        url: 'https://wa-communicate.com',
        imgUrl: 'wacomm.png',
      },
      appruveWebsite: {
        name: 'Appruve website',
        company: 'Appruve',
        description: `Appruve builds tools to connect Africans to opportunities globally. It helps businesses use financial and identity data across Africa to detect fraud and automate compliance in their organisations..`,
        year: '2020',
        stack: 'NuxtJS, VueJS/VueXJS, Tachyons CSS',
        url: 'https://appruve.co',
        imgUrl: 'appruve-website.png',
      },
      appruveDashboard: {
        name: 'Appruve Dashboard',
        company: 'Walulel Ghana',
        description: `Build the custom dashboard of Appruve to handle clients businesses`,
        year: '2020',
        stack: 'NuxtJS, VueJS/VueXJS, Tachyons CSS',
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
.philosophie {
  position: relative;
}

.indicators {
  left: 0;
  top: 0;
  margin: 10vh 0;
  height: 80vh;
  width: 3px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
}

.indicator {
  width: 100%;
  background-color: #adadad;
  flex-grow: 1;
  margin: 2px 0;
}

.philosophie .point {
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 4rem;
  justify-content: center;
  align-content: center;

  /* width: 100%; */

  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem; */
}

.philosophie .wrapper {
  height: 100vh;
  width: 100%;
}

.point article {
  grid-column-start: 8;
  grid-column-end: 13;

  margin: auto 0;
}

.point img {
  grid-column-start: 1;
  grid-column-end: 7;
  margin-left: 2rem;
}
</style>
