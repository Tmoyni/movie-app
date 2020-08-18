<template>
  <div class="container">
    <h3>Movie</h3>
    <div class="search-bar">
      <input class="search-bar__input" type="search" id="search" placeholder="Find a Movie">
      <button class="search-bar__btn">Search</button>
    </div>

    <div class="search-results">
      <div class="search-result">
        <h4 class="search-result__title">Movie Title</h4>
        <button class="search-result__btn">Select</button>

      </div>
      <div class="search-result">
        <h4 class="search-result__title">Movie Title</h4>
        <button class="search-result__btn">Select</button>
      </div>

      <div class="search-result">
        <h4 class="search-result__title">Movie Title</h4>
        <button class="search-result__btn">Select</button>
      </div>

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
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-bar__input {
  font-size: 1.2rem;
  margin-right: .5rem;
  padding: 2px;
}

.search-bar__btn {
  font-size: 1.2rem;
  margin-right: .5rem;
  padding: 2px 10px;
}

.search-result {
  display: flex;
  margin: 1rem;
}

.search-result__btn {
  font-size: 1.2rem;
  margin-left: 1rem;
  padding: 2px 10px;
}
</style>