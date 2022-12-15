<script>
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
@use './styles/general.scss';
</style>
