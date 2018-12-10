import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../src/components/index.vue'
import Product from '../src/components/product.vue'
import Company from '../src/components/company.vue'
import Home from '../src/home/home.vue'
import LoginIndex from '../src/loginIndex/index.vue'
import Shouye from '../src/loginIndex/shouye.vue'
import Marketing from '../src/loginIndex/marketing.vue'
import Teaching from '../src/loginIndex/teaching.vue'
import SelectionClass from '../src/loginIndex/selectionclass.vue'
import Officialwebsite from '../src/loginIndex/officialwebsite.vue'
import ManageClass from '../src/loginIndex/manageclass.vue'

export default new VueRouter({
    routes: [{
            path: '/',
            component: Home,
            redirect: '/index',
            children: [{
                    path: '/index',
                    component: Index
                },
                {
                    path: '/product',
                    component: Product
                },
                {
                    path: '/company',
                    component: Company
                },
            ]
        },
        {
            path: '/loginIndex',
            component: LoginIndex,
            redirect: '/shouye',
            children: [{
                    path: '/shouye',
                    component: Shouye
                },
                {
                    path: '/marketing',
                    component: Marketing
                },
                {
                    path: '/teaching',
                    component: Teaching
                },
                {
                    path: '/selectionclass',
                    component: SelectionClass
                },
                {
                    path: '/manageclass',
                    component: ManageClass,
                }
            ]
        },
        {
            path: '/officialwebsite',
            component: Officialwebsite
        }
    ],
})