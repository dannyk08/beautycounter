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
html,
body,
#app {
  height: 100%;
  float: left;
  width: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background-image: url(/images/stormtrooper-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 1000px) {
  #app {
    background-image: url(/images/stormtrooper-desktop.jpg);
  }
}
</style>
