<template>
  <div id="app">
    <Search />
  </div>
</template>

<script>
import Search from "./components/search.component";

export default {
  name: "app",
  components: {
    Search
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

body {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
