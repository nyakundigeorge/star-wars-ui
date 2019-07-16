<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left is-4by3">
                    <img :src="imgUrl" alt="">
                </div>
                <div class="media-content">
                    <h3>{{title}}</h3>
                    <time datetime="2016-1-1">{{Date(publishedDate)}}</time>
                    <!--                <p>{{url}}</p>-->
                </div>
            </div>
            <div class="content">
                {{abstract}}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item is-half">More Info</a>
            <a href="#" class="card-footer-item is-half">Like</a>
        </footer>
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
            },
            imgUrl:{
                type: String,
                required: true
            },
            abstract:{
                type: String,
                required:true
            }
        }
    }
</script>

<style scoped>
    figure{
        margin: 0 !important;
    }
    .card:hover{
        cursor: pointer;
    }
    .card-footer-item:hover{
        background-color: rgb(32, 156, 238);
        color: #ffffff;
    }

</style>