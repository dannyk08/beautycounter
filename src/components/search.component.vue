<template>
  <div class="search-component-route">
    <main class="search-component">
      <link rel="stylesheet" href="/css/skeleton.css">
      <form class="container search-form" @submit.prevent="handleSearch">
          <h4>Search Character</h4>
          <hr class="header-underline">
        <div class="row input-block">
          <input class="eight columns flushed-input" v-on:input="debounceInput" type="text" placeholder="search">
          <button :disabled="searchList.length" class="four columns flushed-submit" >{{!loadingSearch ? 'submit' : '...loading'}}</button>
        </div>
        <div class="row input-results-list">
          <ul class="search-list-results">
            <li 
            class="search-list-results-item"
            @click="selectCharacter(item)"
            v-if="index < 3"
            v-for="(item, index) in searchList"
            v-bind:key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </form>
      <section class="container search-results"  v-if="Object.keys(character).length">
        <div class="row character-info">
          <h3>{{character.name}}</h3>
          <p>Gender: {{character.gender}}</p>
          <p>Hair Color: {{character.hair_color}}</p>
          <p>Skin Color: {{character.skin_color}}</p>
          <p>Eye Color: {{character.eye_color}}</p>
        </div>
        <div class="row character-info" v-if="!Object.keys(character).length && zeroCharactersMessage.length">
          <p>{{zeroCharactersMessage}}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import { StarWarsRequest } from "./../services";

export default {
  name: "Search",
  props: {},
  data() {
    return {
      query: "",
      searchList: [],
      character: {},
      zeroCharactersMessage: "search for a star wars character",
      loadingSearch: false
    };
  },
  methods: {
    debounceInput: debounce(function(e) {
      if (e.target.value && e.target.value.length) {
        this.handleSearch(e.target.value);
        this.zeroCharactersMessage = "";
      }
    }, 250),
    handleSearch(searchQuery) {
      const query = `people/?search=${searchQuery}`;
      if (!this.loadingSearch) {
        this.loadingSearch = true;
        StarWarsRequest(query).then(({ results }) => {
          if (!results.length) {
            this.zeroCharactersMessage =
              "No results found :( . Try another search!";
          } else {
            this.zeroCharactersMessage = "";
            this.searchList = results;
          }
          this.loadingSearch = false;
        });
      }
    },
    selectCharacter(character) {
      this.character = character;
      this.searchList = [];
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.search-component-route {
  height: 100%;
  width: 100%;
  background-image: url(/images/stormtrooper-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.container {
  padding: 3rem 2rem 4rem;
  background: white;
  box-sizing: border-box;
  opacity: 0.975;
}

.search-form {
  border-bottom: 1px solid #cbcbcb;
}

.search-component {
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.header-underline {
  width: 50%;
  display: block;
  border-bottom: 0.25rem solid black;
  margin: 0 auto 2rem;
}

.flushed-input,
.flushed-submit {
  margin-bottom: 0;
}

.search-list-results-item {
  background-color: ghostwhite;

  margin: 0;
  padding: 1rem;
}

@media (min-width: 550px) {
  .header-underline {
    width: 35%;
  }

  .flushed-input {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .flushed-submit {
    margin-left: 0;
    width: calc(30.66% + 4%);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .search-list-results-item {
    transition: background-color 1s ease-in;
  }
  .search-list-results-item:hover {
    background-color: white;
    cursor: pointer;
  }
}

@media (min-width: 1000px) {
  .search-component-route {
    background-image: url(/images/stormtrooper-desktop.jpg);
  }

  .header-underline {
    width: 25%;
  }
}
</style>
