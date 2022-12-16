<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import CharactersListVue from './components/CharactersList.vue';


import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersListVue,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacter() {

      let myUrl = store.apiUrl;

      if (store.searchStatus !== "select") {
        myUrl += `?${store.apiStatusParameter}=${store.searchStatus}`;
      }

      axios
        .get(myUrl)
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
    <CharactersListVue @performSearch="getCharacter" />
  </main>
</template>

<style lang="scss" scoped>
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;
</style>
