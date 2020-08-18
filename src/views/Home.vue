<template>
  <div class="home">
    <h1>Cast Compare</h1>
    <div class="movies">
      <MovieOne msg="Cast Compare"/>
      <MovieOne msg="Cast Compare"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import MovieOne from '@/components/MovieOne.vue'

export default {
  name: 'Home',
  components: {
    MovieOne
  }
}
</script>

<style scoped>

.movies {
  display: flex;
  justify-content: center;
}
</style>