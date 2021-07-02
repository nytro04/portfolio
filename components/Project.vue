<template>
  <div class="point">
    <img
      class="col-start-1 col-end-7 pb-10 md:pb-0 box1"
      :src="require(`~/assets/img/${imgUrl}`)"
      :alt="name"
    />
    <article class="">
      <h3 class="pb-5 text-xl font-semibold uppercase md:text-2xl">
        {{ name }}
      </h3>
      <div class="pb-5 border-b-2 border-white">
        <p class="text-sm">
          {{ description }}
        </p>
      </div>
      <p class="py-5 text-sm border-b-2 border-white lg:text-base">
        {{ name }} • {{ year }}
      </p>
      <p class="py-5 text-sm border-b-2 border-white lg:text-base">
        {{ stack }}
      </p>
      <div class="py-5 text-sm border-b-2 border-white lg:text-base">
        <a class="move-r" :href="url" target="_blank" rel="noopener noreferrer">
          {{ url }}
        </a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    name: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: '',
    },
    stack: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';

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
    margin: 0 auto;
  }
}

.philosophie .wrapper {
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @include respond(tab-land) {
    height: 60vh;
  }
  @include respond(tab-port) {
    height: 60vh;
  }

  @include respond(phone) {
    margin: 0 auto;
  }
}

.point article {
  overflow: hidden;
  grid-column-start: 8;
  grid-column-end: 13;

  margin: auto 0;

  @include respond(tab-land) {
  }
  @include respond(tab-port) {
    grid-column-start: 7;
    grid-column-end: 13;
  }

  @include respond(phone) {
  }
}

.point img {
  grid-column-start: 1;
  grid-column-end: 7;
  margin-left: 2rem;
  overflow: hidden;

  @include respond(tab-land) {
  }
  @include respond(tab-port) {
    grid-column-start: 1;
    grid-column-end: 7;
    /* margin-left: 2rem; */
    margin: auto 0;
  }

  @include respond(phone) {
    display: block;
    margin-left: 0;
  }
}
</style>
