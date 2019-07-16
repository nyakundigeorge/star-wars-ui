<template>
    <section class="container">
        <div class="topMargin"></div>
        <div class="columns is-multiline">
            <div class="column is-half " v-for="newsItem in news" v-bind:key="newsItem.slug_name">
                <MainMemeCard :abstract="newsItem.abstract" :published-date="newsItem.published_date" :title="newsItem.title" :url="newsItem.url" :img-url="newsItem.thumbnail_standard"/>
            </div>

        </div>
        <div class="bottomMargin"></div>
    </section>

</template>

<script>
    import MainMemeCard from "../components/Cards/MainMemeCard";
    import {FETCH_NEWS} from "../store/actionTypes";
    // import Modal from "fish-ui";

    export default {
        name: "Home",
        components: { MainMemeCard},
        async created() {
            await this.$store.dispatch(FETCH_NEWS);
            // this.$modal.show('hello-world');
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
                        source,
                        thumbnail_standard
                    } = newsItem;

                    return {
                        abstract,
                        published_date,
                        url,
                        title,
                        slug_name,
                        source,
                        thumbnail_standard
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