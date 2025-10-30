<template>
  <div class="max-w-xl mx-auto px-4 py-6">
    <div
      v-if="data"
      class="flex items-center gap-4 p-6 mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      <img
        :src="data.avatar"
        :alt="data.name"
        class="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">{{ data.name }}</h2>
        <p class="text-gray-600 dark:text-gray-300">{{ data.email }}</p>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
      <RouterLink
        v-for="item in settingsItems"
        :key="item.route"
        :to="item.route"
        class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <i :class="item.icon" class="text-2xl w-10 text-center text-blue-600 dark:text-blue-400"></i>
        <div class="flex-1">
          <p class="font-medium text-gray-900 dark:text-white">{{ item.title }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.description }}</p>
        </div>
        <i class="pi pi-chevron-right text-gray-400 dark:text-gray-500"></i>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserProfile } from '../composables/useUserProfile'

const { data } = useUserProfile()

const settingsItems = [
  {
    title: 'Privacidade',
    description: 'Configurações de privacidade',
    icon: 'pi pi-lock',
    route: '/settings/privacidade'
  },
  {
    title: 'Conta',
    description: 'Informações pessoais',
    icon: 'pi pi-user',
    route: '/settings/conta'
  },
  {
    title: 'Notificações',
    description: 'Preferências de notificações',
    icon: 'pi pi-bell',
    route: '/settings/notificacoes'
  },
  {
    title: 'Aparência',
    description: 'Tema e personalização',
    icon: 'pi pi-palette',
    route: '/settings/aparencia'
  },
  {
    title: 'Segurança',
    description: 'Segurança da conta',
    icon: 'pi pi-shield',
    route: '/settings/seguranca'
  }
]
</script>
