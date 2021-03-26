import Vue from 'vue'
import Router from 'vue-router'
import student from "../components/student";
import back from "../components/back";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {path:"/back",component: back },
        {path:"/student",component:student},
        {path: "/detail/:id",component: UserDetail},
        {path: "/",redirect:"/back"},
        {path: "/*",redirect:"/back"},
    ]
})
