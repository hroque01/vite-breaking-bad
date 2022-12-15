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
        <div class="row">
            <div v-for="character in store.characterList" :key="character.id">
                <SingleCharacterVue :info="character" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
    width: calc(100 / 6);
    gap: 10px;
    flex-wrap: wrap;
}
</style>