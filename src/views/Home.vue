<template>
  <div class="home">
    <MovieOne msg="Cast Compare"/>
    <MovieOne msg="Cast Compare"/>
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
