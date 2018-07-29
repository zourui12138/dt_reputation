import Vue from 'vue'
import Router from 'vue-router'

import Platform from '../modules/platform/Platform'
import Home from '../modules/platform/home/Home'
import AddValue from '../modules/platform/addValue/AddValue'
import AddReputation from '../modules/platform/addReputation/AddReputation'
import CompanyEvents from '../modules/platform/companyEvents/CompanyEvents'

Vue.use(Router);

export default new Router({
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/platform/home'
        },
        {
            path: '/platform',
            name: 'platform',
            component: Platform,
            children: [
                {
                    path: '/platform/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/platform/addValue',
                    name: 'addValue',
                    component: AddValue
                },
                {
                    path: '/platform/addReputation',
                    name: 'addReputation',
                    component: AddReputation
                },
                {
                    path: '/platform/companyEvents',
                    name: 'companyEvents',
                    component: CompanyEvents
                }
            ]
        }
    ]
});
