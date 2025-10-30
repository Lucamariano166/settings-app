<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
    <div v-if="isMobile" class="border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center h-14 px-4">
        <button
          v-if="showBackButton"
          @click="goBack"
          class="mr-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <i class="pi pi-arrow-left text-xl"></i>
        </button>
        <h1 class="text-base font-semibold">{{ pageTitle }}</h1>
      </div>
    </div>

    <div class="flex max-w-6xl mx-auto">
      <aside v-if="!isMobile" class="w-72 border-r border-gray-200 dark:border-gray-700 min-h-screen">
        <div class="px-4 py-8">
          <h1 class="text-2xl font-bold mb-8">Configurações</h1>
          <SettingsMenu />
        </div>
      </aside>

      <div v-if="isMobile && !currentSubmenu" class="flex-1 px-4 py-6">
        <SettingsMenu />
      </div>

      <main v-if="!isMobile || currentSubmenu" class="flex-1 p-6">
        <RouterView />
      </main>
    </div>

    <DynamicDialog />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SettingsMenu from '../components/SettingsMenu.vue'
import DynamicDialog from 'primevue/dynamicdialog'

const route = useRoute()
const router = useRouter()
const windowWidth = ref(window.innerWidth)

const isMobile = computed(() => windowWidth.value < 768)

const currentSubmenu = computed(() => {
  const path = route.path.split('/').pop()
  return path !== 'settings' ? path : null
})

const showBackButton = computed(() => isMobile.value && currentSubmenu.value !== null)

const pageTitle = computed(() => {
  if (!currentSubmenu.value) return 'Configurações'

  const titles: Record<string, string> = {
    privacidade: 'Privacidade',
    conta: 'Conta',
    notificacoes: 'Notificações',
    aparencia: 'Aparência',
    seguranca: 'Segurança'
  }

  return titles[currentSubmenu.value] || 'Configurações'
})

const goBack = () => router.push('/settings')

const handleResize = () => (windowWidth.value = window.innerWidth)

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>
