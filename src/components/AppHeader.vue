<script>
export default {
    name: 'AppHeader',
    props: ["msg"]
}
</script>

<template>
    <header class="container">
        <h1 class="m-5">
            {{ msg }}
        </h1>
    </header>
</template>

<style lang="scss" scoped>

</style>