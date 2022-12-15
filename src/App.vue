<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js';

export default {
  name: App,
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <AppHeader msg="Rick and Morty App" />
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
</style>
