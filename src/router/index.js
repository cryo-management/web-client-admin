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
import TreeCreate from '../views/tree/Create.vue'
import TreeList from '../views/tree/List.vue'
import TreeEdit from '../views/tree/Edit.vue'
import TreeUnitCreate from '../views/treeUnit/Create.vue'
import TreeUnitList from '../views/treeUnit/List.vue'
import TreeUnitEdit from '../views/treeUnit/Edit.vue'
import TreeLevelCreate from '../views/treeLevel/Create.vue'
import TreeLevelList from '../views/treeLevel/List.vue'
import TreeLevelEdit from '../views/treeLevel/Edit.vue'
import SchemaCreate from '../views/schema/Create.vue'
import SchemaList from '../views/schema/List.vue'
import SchemaEdit from '../views/schema/Edit.vue'
import FieldCreate from '../views/field/Create.vue'
import FieldList from '../views/field/List.vue'
import FieldEdit from '../views/field/Edit.vue'
import FieldValidationCreate from '../views/fieldValidation/Create.vue'
import FieldValidationList from '../views/fieldValidation/List.vue'
import FieldValidationEdit from '../views/fieldValidation/Edit.vue'
import PageCreate from '../views/page/Create.vue'
import PageList from '../views/page/List.vue'
import PageEdit from '../views/page/Edit.vue'
import SectionCreate from '../views/section/Create.vue'
import SectionList from '../views/section/List.vue'
import SectionEdit from '../views/section/Edit.vue'
import TabCreate from '../views/tab/Create.vue'
import TabList from '../views/tab/List.vue'
import TabEdit from '../views/tab/Edit.vue'
import ContainerStructureCreate from '../views/containerStructure/Create.vue'
import ContainerStructureList from '../views/containerStructure/List.vue'
import ContainerStructureEdit from '../views/containerStructure/Edit.vue'
import ViewCreate from '../views/view/Create.vue'
import ViewList from '../views/view/List.vue'
import ViewEdit from '../views/view/Edit.vue'
import LookupCreate from '../views/lookup/Create.vue'
import LookupList from '../views/lookup/List.vue'
import LookupEdit from '../views/lookup/Edit.vue'
import LookupOptionCreate from '../views/lookupOption/Create.vue'
import LookupOptionList from '../views/lookupOption/List.vue'
import LookupOptionEdit from '../views/lookupOption/Edit.vue'
import WidgetCreate from '../views/widget/Create.vue'
import WidgetList from '../views/widget/List.vue'
import WidgetEdit from '../views/widget/Edit.vue'
import CurrencyCreate from '../views/currency/Create.vue'
import CurrencyList from '../views/currency/List.vue'
import CurrencyEdit from '../views/currency/Edit.vue'
import CurrencyRateCreate from '../views/currencyRate/Create.vue'
import CurrencyRateList from '../views/currencyRate/List.vue'
import CurrencyRateEdit from '../views/currencyRate/Edit.vue'
import JobCreate from '../views/job/Create.vue'
import JobList from '../views/job/List.vue'
import JobEdit from '../views/job/Edit.vue'
import JobInstanceList from '../views/job/jobInstance/List.vue'
import JobTaskCreate from '../views/jobTask/Create.vue'
import JobTaskList from '../views/jobTask/List.vue'
import JobTaskEdit from '../views/jobTask/Edit.vue'
import JobTaskInstanceList from '../views/jobTask/jobTaskInstance/List.vue'
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
      path: '/admin/trees/create',
      name: 'TreeCreate',
      component: TreeCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees',
      name: 'TreeList',
      component: TreeList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id',
      name: 'TreeEdit',
      component: TreeEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id/units/create',
      name: 'TreeUnitCreate',
      component: TreeUnitCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id/units',
      name: 'TreeUnitList',
      component: TreeUnitList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id/units/:tree_unit_id',
      name: 'TreeUnitEdit',
      component: TreeUnitEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id/levels/create',
      name: 'TreeLevelCreate',
      component: TreeLevelCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id/levels',
      name: 'TreeLevelList',
      component: TreeLevelList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/trees/:tree_id/levels/:tree_level_id',
      name: 'TreeLevelEdit',
      component: TreeLevelEdit,
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
      path: '/admin/schemas/:schema_id/fields/:field_id/validations/create',
      name: 'FieldValidationCreate',
      component: FieldValidationCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/fields/:field_id/validations',
      name: 'FieldValidationList',
      component: FieldValidationList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/fields/:field_id/validations/:field_validation_id',
      name: 'FieldValidationEdit',
      component: FieldValidationEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/pages/create',
      name: 'PageCreate',
      component: PageCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/pages',
      name: 'PageList',
      component: PageList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/pages/:page_id',
      name: 'PageEdit',
      component: PageEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/pages/:page_id/sections/create',
      name: 'SectionCreate',
      component: SectionCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/pages/:page_id/sections',
      name: 'SectionList',
      component: SectionList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/pages/:page_id/sections/:section_id',
      name: 'SectionEdit',
      component: SectionEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/pages/:page_id/sections/:section_id/tabs/create',
      name: 'TabCreate',
      component: TabCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/pages/:page_id/sections/:section_id/tabs',
      name: 'TabList',
      component: TabList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/pages/:page_id/sections/:section_id/tabs/:tab_id',
      name: 'TabEdit',
      component: TabEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/pages/:page_id/containers/:container_id/types/:container_type/structures/create',
      name: 'ContainerStructureCreate',
      component: ContainerStructureCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/pages/:page_id/containers/:container_id/types/:container_type/structures',
      name: 'ContainerStructureList',
      component: ContainerStructureList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path:
        '/admin/schemas/:schema_id/pages/:page_id/containers/:container_id/types/:container_type/structures/:container_structure_id',
      name: 'ContainerStructureEdit',
      component: ContainerStructureEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/views/create',
      name: 'ViewCreate',
      component: ViewCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/views',
      name: 'ViewList',
      component: ViewList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/schemas/:schema_id/views/:view_id',
      name: 'ViewEdit',
      component: ViewEdit,
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
      path: '/admin/lookups/:lookup_id/options/create',
      name: 'LookupOptionCreate',
      component: LookupOptionCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/lookups/:lookup_id/options',
      name: 'LookupOptionList',
      component: LookupOptionList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/lookups/:lookup_id/options/:lookup_option_id',
      name: 'LookupOptionEdit',
      component: LookupOptionEdit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/widgets/create',
      name: 'WidgetCreate',
      component: WidgetCreate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/widgets',
      name: 'WidgetList',
      component: WidgetList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin/widgets/:widget_id',
      name: 'WidgetEdit',
      component: WidgetEdit,
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
      path: '/admin/jobs/instances',
      name: 'JobInstanceList',
      component: JobInstanceList,
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
      path: '/admin/jobs/:job_instance_id/instances/tasks/instances',
      name: 'JobTaskInstanceList',
      component: JobTaskInstanceList,
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
