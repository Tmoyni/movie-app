<template>
  <div class="container">
    <h3>Guardians of the Galaxy Vol. 2</h3>

    <div class="movie-details">
    <img class="movie-details__img" src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="poster">

    </div>

  </div>
  
</template>

<script>
export default {
  name: 'MovieOne',
}
</script>

<style scoped>
h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.container {
  width: 30rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 10px 20px rgba(192,200,200,.4);
  display: flex;
}

.movie-details__img {
  width: 10rem;
}

</style>