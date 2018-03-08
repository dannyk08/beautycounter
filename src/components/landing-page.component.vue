<template>
  <div class="landing-page-component">
    <section class="reset-float hero">
      <div class="cta-section desktop-grid">
        <button class="cta">
          <span>NEW</span>
        </button>
      </div>
      <div class="hero-message desktop-grid">
        <h1 class="hero-headline">Good Hair Days Start with Safer Ingredients</h1>
        <p class="hero-sub">Formulated without sulfates, mineral oil, silicones, or synthetic fragances, our
          <br class="show-tablet-up"> next generation hair care delivers high performance and safety.</p>
      </div>
      <div class="hero-image-container">
        <img class="hero-image" src="/images/hero-mobile.jpg" srcset="/images/hero-mobile@2x.jpg" alt="Beatuy Counter Next Generation Products">
      </div>
    </section>
    <nav class="reset-float navigation">
      <ul class="navigation-list desktop-grid">
        <li class="navigation-list-item">
          <a>VOLUME & SHAPE</a>
        </li>
        <li class="navigation-list-item">
          <a>SMOOTH & CONTROL</a>
        </li>
        <li class="navigation-list-item">
          <a>REPAIR & NOURISH</a>
        </li>
        <li class="navigation-list-item">
          <a>REVIEWS</a>
        </li>
        <li class="navigation-list-item">
          <a>HOW-TO-VIDEOS</a>
        </li>
        <li class="navigation-list-item">
          <a>INGREDIENTS</a>
        </li>
      </ul>
    </nav>
      <main class="reset-float main">
        <section class="main-content-background">
          <div class="main-content desktop-grid">
            <section class="model-section">
              <img class="model-section-image" src="/images/girl.jpg" srcset="/images/girl@2x.jpg" alt="Model Girl with great red hair">
            </section>
            <section class="navigation-section">
              <h3>Volume & Shape</h3>
              <hr class="header-shadow">
              <p>Reveal beautiful body and enviable oomph with this collection for fine, flat hair featuring volumizing hibiscus
                proteins. Safe for color treated hair.</p>
            </section>
          </div>
        </section>
      </main>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
@font-face {
  font-family: "Heading font";
  src: url("/fonts/heading-font.otf");
}

@font-face {
  font-family: "Body font";
  src: url("/fonts/body-font.otf");
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 2.25em;
}

h3 {
  font-size: 2em;
}

h4 {
  font-size: 1.75em;
}

h5 {
  font-size: 1.5em;
}

h6 {
  font-size: 1.25em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Heading font", Cambria, Cochin, Georgia, Times,
    "Times New Roman", serif;
  font-weight: 100;
}

a,
p {
  font-family: "Body font", Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  line-height: 1.5;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

button {
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
}

button:focus,
button:active {
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

.reset-float {
  display: block;
  float: left;
  width: 100%;
}

.header-shadow {
  width: 4rem;
  border: 0.125rem solid;
  text-align: left;
  display: inline-block;
  margin: 0 0 1rem;
}

.cta-section {
  padding-top: 1.5rem;
}

.show-tablet-up {
  display: none;
}

.show-desktop-up {
  display: none;
}

.cta {
  width: 4rem;
  margin: auto;
  display: block;
  background-color: #536590;
  color: white;
  letter-spacing: 0.125em;
}

.hero-message {
  text-align: center;
  padding: 0 2rem;
}

.hero-image-container {
  display: table;
}

.hero-image {
  float: left;
}

.navigation-list {
  border: 1px solid #d2cccc;
  border-left: none;
  border-right: none;
  overflow: auto;
  height: 4.5rem;
  white-space: nowrap;
}

.navigation-list-item {
  border-bottom: 0.25rem solid transparent;
  box-sizing: border-box;
  display: inline-block;
  font-size: 0.8em;
  letter-spacing: 0.125em;
  padding: 1.5rem 1rem 1.25rem;
  text-align: center;
}

.model-section {
  padding-top: 4rem;
  height: 15rem;
}

.model-section-image {
  border: 1rem solid white;
  box-shadow: 0 0 1rem #d2cccc;
  display: block;
  margin: auto;
  max-width: 20rem;
  position: relative;
  z-index: 9;
}

.navigation-section {
  padding: 12rem 2rem 2rem;
  background-color: rgb(203, 212, 232);
  box-sizing: border-box;
}

@media (min-width: 700px) {
  body {
    font-size: 18px;
  }
  .show-tablet-up {
    display: initial;
  }
}

@media (min-width: 992px) {
  .navigation .navigation-list {
    display: block;
  }
  .navigation-list-item {
    width: calc(100%/6);
    padding-left: 0;
    padding-right: 0;
    float: left;
  }
  .navigation-list-item:hover {
    border-bottom: 0.25rem solid black;
    cursor: pointer;
  }
  .main {
    padding: 7rem 0;
  }
  .main-content-background {
    background-color: rgb(203, 212, 232);
    height: 30rem;
  }
  .model-section {
    float: left;
    padding: 0;
    width: 50%;
    height: initial;
  }
  .model-section-image {
    margin-top: -5rem;
    max-width: 30rem;
  }
  .navigation-section {
    background-color: initial;
    float: left;
    padding-top: 7rem;
    width: 50%;
  }
}

@media (min-width: 1200px) {
  .desktop-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: table;
  }
  .navigation-list {
    border: none;
  }
  .show-desktop-up {
    display: initial;
  }
}
</style>
