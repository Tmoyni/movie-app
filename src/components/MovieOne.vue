<template>
  <div class="container">
    <h3>Movie One</h3>
  </div>
</template>

<script>
export default {
  name: 'MovieOne',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  display: flex;
  padding: 10px;
  width: 500px;
  border-radius: 25px;

  background: red
}
</style>