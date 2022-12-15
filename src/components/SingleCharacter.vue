<script>
import { store } from '../store.js';

export default {
    name: "SingleCharacter",
    props: ["info"],

}
</script>

<template>
    <!-- template di card singola -->
    <div class="text-center">
        <img :src="info.image" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{ info.status }}</div>
        <div>{{ info.species }}</div>
    </div>

</template>

<style lang="scss" scoped>

</style>