import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    apiUrl: 'https://rickandmortyapi.com/api/character',
    titolo: "Rick and Morty API",
})