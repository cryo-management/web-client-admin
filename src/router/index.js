import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import LanguageCreate from '../views/language/Create.vue'
import LanguageList from '../views/language/List.vue'
import LanguageEdit from '../views/language/Edit.vue'
import UserCreate from '../views/user/Create.vue'
import UserList from '../views/user/List.vue'
import UserEdit from '../views/user/Edit.vue'
import GroupCreate from '../views/group/Create.vue'
import GroupList from '../views/group/List.vue'
import GroupEdit from '../views/group/Edit.vue'
import SchemaCreate from '../views/schema/Create.vue'
import SchemaList from '../views/schema/List.vue'
import SchemaEdit from '../views/schema/Edit.vue'
import LookupCreate from '../views/lookup/Create.vue'
import LookupList from '../views/lookup/List.vue'
import LookupEdit from '../views/lookup/Edit.vue'
import CurrencyCreate from '../views/currency/Create.vue'
import CurrencyList from '../views/currency/List.vue'
import CurrencyEdit from '../views/currency/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || 'http://localhost:8080',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin/languages/create',
      name: 'LanguageCreate',
      component: LanguageCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/languages',
      name: 'LanguageList',
      component: LanguageList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/languages/:language_id',
      name: 'LanguageEdit',
      component: LanguageEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/users/create',
      name: 'UserCreate',
      component: UserCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/users',
      name: 'UserList',
      component: UserList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/users/:user_id',
      name: 'UserEdit',
      component: UserEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/create',
      name: 'GroupCreate',
      component: GroupCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups',
      name: 'GroupList',
      component: GroupList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/:group_id',
      name: 'GroupEdit',
      component: GroupEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/create',
      name: 'SchemaCreate',
      component: SchemaCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas',
      name: 'SchemaList',
      component: SchemaList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id',
      name: 'SchemaEdit',
      component: SchemaEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/lookups/create',
      name: 'LookupCreate',
      component: LookupCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/lookups',
      name: 'LookupList',
      component: LookupList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/lookups/:lookup_id',
      name: 'LookupEdit',
      component: LookupEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/currencies/create',
      name: 'CurrencyCreate',
      component: CurrencyCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/currencies',
      name: 'CurrencyList',
      component: CurrencyList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/currencies/:currency_id',
      name: 'CurrencyEdit',
      component: CurrencyEdit,
      meta: {
        requiresAuth: true,
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
})
