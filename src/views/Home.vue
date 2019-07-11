<template>
    <section class="container">
        <div class="topMargin"></div>
        <div class="columns is-multiline">
            <div class="column is-half " v-for="newsItem in news" v-bind:key="newsItem.slug_name">
                <MainMemeCard :published-date="newsItem.published_date" :title="newsItem.title" :url="newsItem.url"/>
            </div>
        </div>
        <div class="bottomMargin"></div>
    </section>

</template>

<script>
    import MainMemeCard from "../components/Cards/MainMemeCard";
    import {FETCH_NEWS} from "../store/actionTypes";

    export default {
        name: "Home",
        components: {MainMemeCard},
        async created() {
            await this.$store.dispatch(FETCH_NEWS);
        },
        computed :{
            news() {
                return this.$store.state.news.results.map(newsItem => {
                    const {
                        abstract,
                        published_date,
                        url,
                        title,
                        slug_name,
                        source
                    } = newsItem;

                    return {
                        abstract,
                        published_date,
                        url,
                        title,
                        slug_name,
                        source
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .topMargin,.bottomMargin{
        margin:2em;
    }

</style>