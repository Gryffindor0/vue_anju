import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import StrategyList from '@/components/Strategy/StrategyList'
import StrategyListItem from '@/components/Strategy/StrategyListItem'
import DiaryListItem from '@/components/Diary/DiaryListItem'
import CompanyList from '@/components/Company/CompanyList'
import StrategyDetail from '@/components/Strategy/StrategyDetail'
import DiaryDetail from '@/components/Diary/DiaryDetail'
import CompanyDetail from '@/components/Company/CompanyDetail'
import DesignerDetail from '@/components/Designer/DesignerDetail'
import WriteDiary from '@/components/Diary/WriteDiary'

import Login from '@/components/Nav/Login'
import Register from '@/components/Nav/Register'

import CaseList from '@/components/Case/CaseList'
// import CompanyList from '@/components/Company/CompanyList'
import CaseDetail from '@/components/Case/CaseDetail'
import DesignerList from '@/components/Designer/DesignerList'
import PersonalCenter from '@/components/PersonalCenter/PersonalCenter'
import PersonalIndex from '@/components/PersonalCenter/PersonalIndex'
import PersonalData from '@/components/PersonalCenter/PersonalData'
import UpdatePassword from '@/components/PersonalCenter/UpdatePassword'
import AccountSecurity from '@/components/PersonalCenter/AccountSecurity'
import MyOrder from '@/components/PersonalCenter/MyOrder'
import CollectCase from '@/components/PersonalCenter/CollectCase'
import CollectCompany from '@/components/PersonalCenter/CollectCompany'
import CollectDiary from '@/components/PersonalCenter/CollectDiary'
import CollectStrategy from '@/components/PersonalCenter/CollectStrategy'
import MyDiary from '@/components/PersonalCenter/MyDiary'
import MyNews from '@/components/PersonalCenter/MyNews'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/StrategyList',
            name: 'StrategyList',
            component: StrategyList,
            children: [
                {
                    path: 'StrategyListItem',
                    name: 'StrategyListItem',
                    component: StrategyListItem
                },
                {
                    path: 'DiaryListItem',
                    name: 'DiaryListItem',
                    component: DiaryListItem
                }
            ]
        },
        // {
        //     path: '/CompanyList',
        //     name: 'CompanyList',
        //     component: CompanyList
        // },
        {
            path: '/StrategyDetail',
            name: 'StrategyDetail',
            component: StrategyDetail
        },
        {
            path: '/DiaryDetail',
            name: 'DiaryDetail',
            component: DiaryDetail
        },
        {
            path: '/CompanyDetail',
            name: 'CompanyDetail',
            component: CompanyDetail
        },
        {
            path: '/DesignerDetail',
            name: 'DesignerDetail',
            component: DesignerDetail
        },

        {
            path: '/WriteDiary',
            name: 'WriteDiary',
            component: WriteDiary
        },

        {
            path: '/Login',
            name: 'Login',
            component: Login
        }
        ,
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },


        //公司,案例列表,设计师,个人中心
      {
        path: '/companyList/',
        name: 'CompanyList',
        component: CompanyList
      },
      {
        path: '/caseList/',
        name: 'CaseList',
        component: CaseList
      },
      {
        path: '/caseDetail/',
        name: 'CaseDetail',
        component: CaseDetail
      },
      {
        path: '/designerList/',
        name: 'DesignerList',
        component: DesignerList
      },
      {
        path: '/personalCenter/',
        name: 'PersonalCenter',
        component: PersonalCenter,
        children:[
          {path:"", name:"PersonalIndex", component:PersonalIndex},
          {path:"personalData",name:"PersonalData",component:PersonalData},
          {path:"updatePassword",name:"UpdatePassword",component:UpdatePassword},
          {path:"accountSecurity",name:"AccountSecurity",component:AccountSecurity},
          {path:"myOrder",name:"MyOrder",component:MyOrder},
          {path:"collectCase",name:"CollectCase",component:CollectCase},
          {path:"collectCompany",name:"CollectCompany",component:CollectCompany},
          {path:"collectDiary",name:"CollectDiary",component:CollectDiary},
          {path:"collectStrategy",name:"CollectStrategy",component:CollectStrategy},
          {path:"myDiary",name:"MyDiary",component:MyDiary},
          {path:"myNews",name:"MyNews",component:MyNews},
        ]
      }

    ]
})
