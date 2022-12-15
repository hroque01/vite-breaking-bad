<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import CharactersListVue from './components/CharactersList.vue';


import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersListVue
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacter() {
      axios
        .get(store.apiUrl)
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
    <CharactersListVue />
  </main>
</template>

<style lang="scss" scoped>
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;
</style>
