<template>
    <section class="container">
        <div class="topMargin"></div>
        <div class="columns">
            <div class="column is-one-third">
                <MainMemeCard/>
            </div>
        </div>
        <div class="bottomMargin"></div>
    </section>

</template>

<script>
    import MainMemeCard from "../components/Cards/MainMemeCard";
    export default {
        name: "Home",
        components: {MainMemeCard}
    }
</script>

<style scoped>
    .topMargin,.bottomMargin{
        margin:2em;
    }

</style>