<template>
  <div id="app">
    <div class="router-link">
      <router-link :to="{name: routeName}">
        <img class="router-link-image" :src="routeImage">
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      routeName: "LandingPage",
      routeImage: "/images/search.jpg"
    };
  },
  watch: {
    $route(to) {
      this.handleRoute(to.name);
    }
  },
  mounted() {
    this.handleRoute(this.$route.name);
  },
  methods: {
    handleRoute(routeName) {
      if (routeName === "LandingPage") {
        this.routeName = "Search";
        this.routeImage = "/images/search.jpg";
      } else {
        this.routeName = "LandingPage";
        this.routeImage = "/images/beautycounter.jpg";
      }
    }
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
  margin: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.router-link {
  position: absolute;
  top: 0;
  right: 0;
}

.router-link a {
  display: block;
  width: 4.5rem;
  height: 4.5rem;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
}

.router-link-image {
  max-width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

@media (min-width: 750px) {
  body {
    font-size: 18px;
  }

  .router-link {
    top: 1rem;
    right: 1rem;
  }

  .router-link a {
    display: block;
    width: 5rem;
    height: 5rem;
  }
}
</style>
