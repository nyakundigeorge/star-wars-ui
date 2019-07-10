import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import("./views/Home");
const PageNotFound = () => import("./views/PageNotFound");

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    /**
     * Handles Scroll behaviour when navigating between routes. This will scroll to the saved position or to the 0,0 axis
     * on the page i.e. to the top of the page
     * @param {Object} to Route navigating to
     * @param {Object} from Route Navigated from
     * @param {Object} savedPosition is only available if this is a popstate navigation (triggered by the browser's back/forward buttons).
     * @return {Object} {{x: number, y: number}}
     */
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            return { x:0,y:0}
        }
    },
    routes:[
        {
            path:"/",
            name:"Home",
            component: Home
        },{
            path:"*",
            name:"404",
            component: PageNotFound
        }
    ]
})