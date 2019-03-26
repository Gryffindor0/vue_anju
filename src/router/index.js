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
import Login from '@/components/Nav/Login'
import Register from '@/components/Nav/Register'

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
    {
      path: '/CompanyList',
      name: 'CompanyList',
      component: CompanyList
    },
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
      path: '/Login',
      name: 'Login',
      component: Login
    }
    ,
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
