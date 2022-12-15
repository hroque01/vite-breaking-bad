<script>
import SingleCharacterVue from './SingleCharacter.vue';
import { store } from '../store.js';

export default {
    name: "CharacterList",
    components: {
        SingleCharacterVue
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="info-cards">
            <h1>Found 20 character</h1>
        </div>
        <div class="row">
            <div v-for="character in store.characterList" :key="character.id">
                <SingleCharacterVue :info="character" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.info-cards {
    margin: 0 100px;
    padding: 10px;
    background-color: black;

    h1 {
        color: $text-color-h;
    }

}

.row {
    display: flex;
    width: calc(100 / 9);
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
    background-color: white;
}
</style>