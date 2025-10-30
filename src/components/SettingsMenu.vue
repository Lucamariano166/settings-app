<template>
  <div class="py-6">
    <nav>
      <RouterLink
        v-for="item in menuItems"
        :key="item.route"
        :to="`/settings/${item.route}`"
        class="flex items-center gap-3 px-6 py-3 no-underline text-black hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
        :class="{ 'font-semibold': isActive(item.route) }"
      >
        <i :class="item.icon" class="text-xl"></i>
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div class="border-t border-gray-200 mt-4 pt-4">
      <button
        @click="handleLogout"
        class="flex items-center gap-3 px-6 py-3 w-full text-left text-black hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
      >
        <i class="pi pi-sign-out text-xl"></i>
        <span>Sair</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDialog } from 'primevue/usedialog'
import type { MenuItem } from '../types'
import LogoutConfirmDialog from './LogoutConfirmDialog.vue'

const route = useRoute()
const dialog = useDialog()

const menuItems: MenuItem[] = [
  { icon: 'pi pi-lock', label: 'Privacidade', route: 'privacidade' },
  { icon: 'pi pi-user', label: 'Conta', route: 'conta' },
  { icon: 'pi pi-bell', label: 'Notificações', route: 'notificacoes' },
  { icon: 'pi pi-palette', label: 'Aparência', route: 'aparencia' },
  { icon: 'pi pi-shield', label: 'Segurança', route: 'seguranca' },
]

const isActive = (itemRoute: string) => {
  const currentPath = route.path.split('/').pop()
  return currentPath === itemRoute
}

const handleLogout = () => {
  dialog.open(LogoutConfirmDialog, {
    props: {
      header: 'Confirmar Saída',
      modal: true,
      style: { width: '400px' }
    }
  })
}
</script>
