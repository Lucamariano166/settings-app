import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import SettingsLayout from '../views/SettingsLayout.vue'
import PrivacidadeView from '../views/PrivacidadeView.vue'
import ContaView from '../views/ContaView.vue'
import NotificacoesView from '../views/NotificacoesView.vue'
import AparenciaView from '../views/AparenciaView.vue'
import SegurancaView from '../views/SegurancaView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/settings'
  },
  {
    path: '/settings',
    component: SettingsLayout,
    children: [
      {
        path: '',
        name: 'settings',
        component: () => import('../views/SettingsHome.vue')
      },
      {
        path: 'privacidade',
        name: 'privacidade',
        component:  PrivacidadeView
      },
      {
        path: 'conta',
        name: 'conta',
        component: ContaView
      },
      {
        path: 'notificacoes',
        name: 'notificacoes',
        component: NotificacoesView
      },
      {
        path: 'aparencia',
        name: 'aparencia',
        component: AparenciaView
      },
      {
        path: 'seguranca',
        name: 'seguranca',
        component: SegurancaView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
