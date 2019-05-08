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
import FieldCreate from '../views/field/Create.vue'
import FieldList from '../views/field/List.vue'
import FieldEdit from '../views/field/Edit.vue'
import LookupCreate from '../views/lookup/Create.vue'
import LookupList from '../views/lookup/List.vue'
import LookupEdit from '../views/lookup/Edit.vue'
import CurrencyCreate from '../views/currency/Create.vue'
import CurrencyList from '../views/currency/List.vue'
import CurrencyEdit from '../views/currency/Edit.vue'
import CurrencyRateCreate from '../views/currencyRate/Create.vue'
import CurrencyRateList from '../views/currencyRate/List.vue'
import CurrencyRateEdit from '../views/currencyRate/Edit.vue'
import JobCreate from '../views/job/Create.vue'
import JobList from '../views/job/List.vue'
import JobEdit from '../views/job/Edit.vue'
import JobTaskCreate from '../views/jobTask/Create.vue'
import JobTaskList from '../views/jobTask/List.vue'
import JobTaskEdit from '../views/jobTask/Edit.vue'
import JobFollowerCreate from '../views/jobFollower/Create.vue'
import JobFollowerList from '../views/jobFollower/List.vue'
import UserGroupCreate from '../views/userGroup/Create.vue'
import UserGroupList from '../views/userGroup/List.vue'
import GroupUserCreate from '../views/groupUser/Create.vue'
import GroupUserList from '../views/groupUser/List.vue'
import GroupPermissionCreate from '../views/groupPermission/Create.vue'
import GroupPermissionList from '../views/groupPermission/List.vue'
import GroupPermissionEdit from '../views/groupPermission/Edit.vue'

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
      path: '/admin/schemas/:schema_id/fields/create',
      name: 'FieldCreate',
      component: FieldCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/fields',
      name: 'FieldList',
      component: FieldList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/fields/:field_id',
      name: 'FieldEdit',
      component: FieldEdit,
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
    {
      path: '/admin/currencies/:currency_id/rates/create',
      name: 'CurrencyRateCreate',
      component: CurrencyRateCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/currencies/:currency_id/rates',
      name: 'CurrencyRateList',
      component: CurrencyRateList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/currencies/:currency_id/rates/:currency_rate_id',
      name: 'CurrencyRateEdit',
      component: CurrencyRateEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/create',
      name: 'JobCreate',
      component: JobCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs',
      name: 'JobList',
      component: JobList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/:job_id',
      name: 'JobEdit',
      component: JobEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/:job_id/tasks/create',
      name: 'JobTaskCreate',
      component: JobTaskCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/:job_id/tasks',
      name: 'JobTaskList',
      component: JobTaskList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/:job_id/tasks/:job_task_id',
      name: 'JobTaskEdit',
      component: JobTaskEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/:job_id/followers/add',
      name: 'JobFollowerCreate',
      component: JobFollowerCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/jobs/:job_id/followers',
      name: 'JobFollowerList',
      component: JobFollowerList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/users/:user_id/groups/add',
      name: 'UserGroupCreate',
      component: UserGroupCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/users/:user_id/groups',
      name: 'UserGroupList',
      component: UserGroupList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/:group_id/users/add',
      name: 'GroupUserCreate',
      component: GroupUserCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/:group_id/users',
      name: 'GroupUserList',
      component: GroupUserList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/:group_id/permissions/create',
      name: 'GroupPermissionCreate',
      component: GroupPermissionCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/:group_id/permissions',
      name: 'GroupPermissionList',
      component: GroupPermissionList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/groups/:group_id/permissions/:permission_id',
      name: 'GroupPermissionEdit',
      component: GroupPermissionEdit,
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
