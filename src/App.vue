<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import CharactersListVue from './components/CharactersList.vue';
import AppSearchVue from "./components/AppSearch.vue";


import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersListVue,
    AppSearchVue
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacter() {

      let myUrl = store.apiUrl;

      if (store.searchStatus === "alive" || store.searchStatus === "dead" || store.searchStatus === "unknown") {
        myUrl += `?${store.apiStatusParameter}=${store.searchStatus}`
      }

      axios
        .get(store.myUrl)
        .then(res => {
          store.characterList = res.data.results
        })
        .catch(err => {
          console.log("Errori", err);
        })
    }
  },
  mounted() {
    this.getCharacter();
  }
}
</script>

<template>
  <AppHeader :msg="store.titolo" />
  <main>
    <AppSearchVue @performSearch="getCharacter" />
    <CharactersListVue />
  </main>
</template>

<style lang="scss" scoped>
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;
</style>
