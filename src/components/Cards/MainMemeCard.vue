<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                {{title}}
                <br>
                <time datetime="2016-1-1">{{publishedDate}}</time>
                <p>{{url}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainMemeCard",
        props :{
            title : {
                type: String,
                default:"",
                required: true
            },
            url: {
                type: String,
                default: "",
                required: true
            },
            publishedDate: {
                type: String,
                default:"",
                required: true
            }
        }
    }
</script>

<style scoped>
    figure{
        margin: 0 !important;
    }

</style>