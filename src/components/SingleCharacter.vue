<script>
import { store } from '../store.js';

export default {
    name: "SingleCharacter",
    props: ["info"],

}
</script>

<template>
    <!-- template di card singola -->
    <div class="text-center card">
        <img :src="info.image" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div class="information-cards">
            <div>{{ info.status }}</div>
            <div>{{ info.species }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.card {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: $bg-color;

    img {
        padding: 20px;
        width: 200px;
    }

    h4 {
        color: $text-color-h;
    }

    .information-cards {
        padding-bottom: 10px;
        color: $text-color-fonts;
    }


}
</style>