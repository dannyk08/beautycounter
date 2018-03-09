<template>
  <div id="app">
    <div class="portfolio-link">
      <a href="https://dannys.io"></a>
    </div>
    <div class="router-link" :style="{'background-image': `url(${routeImage})`}">
      <router-link :to="{name: routeName}"></router-link>
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

.portfolio-link,
.router-link {
  position: fixed;
  border-radius: 50%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 4.5rem;
  overflow: hidden;
  top: 0.5rem;
  width: 4.5rem;
}

.router-link {
  right: 0.5rem;
}

.portfolio-link {
  left: 0.5rem;
  background-image: url("/images/dannys_io-icon.jpg");
}

.portfolio-link a,
.router-link a {
  display: block;
  width: 100%;
  height: 100%;
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

  .portfolio-link,
  .router-link {
    top: 1rem;
  }

  .portfolio-link {
    left: 1rem;
  }

  .router-link {
    right: 1rem;
  }
}
</style>
