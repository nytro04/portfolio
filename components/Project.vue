<template>
  <div class="point">
    <img
      class="col-start-1 col-end-7 box1"
      :src="require(`~/assets/img/${imgUrl}`)"
      alt="Hope Adoli"
    />
    <article>
      <h3 class="pb-5 text-2xl font-semibold uppercase">{{ name }}</h3>
      <div class="pb-5 border-b-2 border-white">
        <p class="text-sm">
          {{ description }}
        </p>
      </div>
      <p class="py-5 border-b-2 border-white">{{ name }} • {{ year }}</p>
      <p class="py-5 border-b-2 border-white">{{ stack }}</p>
      <p class="py-5 border-b-2 border-white">
        <a class="move-r" :href="url" target="_blank" rel="noopener noreferrer">
          {{ url }}
        </a>
      </p>
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
