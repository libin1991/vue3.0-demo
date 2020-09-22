import { createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/todolist',
            component:() => import('../pages/todo-list.vue')
        }
    ]
})