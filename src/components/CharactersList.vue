<script>
import { store } from '../store.js';

export default {
    name: "CharacterList",
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
            <div>
                <!-- template di card singola -->
                <div class="text-center">
                    <img src="" alt="">
                    <h4>nome</h4>
                    <div>stato</div>
                    <div>specie</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>