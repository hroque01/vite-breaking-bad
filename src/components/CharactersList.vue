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
                <SingleCharacterVue />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>