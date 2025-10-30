<template>
  <div class="max-w-2xl mx-auto p-4 md:p-8">
    <h1 class="text-2xl font-semibold mb-2">Aparência</h1>
    <p class="text-gray-500 dark:text-gray-400 text-sm mb-8">
      Personalize a aparência do aplicativo
    </p>

    <div class="space-y-0 border-t border-gray-200 dark:border-gray-800">

      <div class="py-4 border-b border-gray-200 dark:border-gray-800">
        <p class="font-medium mb-4">Tema</p>
        <div class="flex items-center justify-center gap-4 py-6">
          <i class="pi pi-sun text-2xl text-yellow-500"></i>
          <ThemeToggle />
          <i class="pi pi-moon text-2xl text-blue-500"></i>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
          {{ isDarkMode ? 'Modo Escuro Ativado' : 'Modo Claro Ativado' }}
        </p>
      </div>

      <div class="py-4 border-b border-gray-200 dark:border-gray-800">
        <p class="font-medium mb-4">Tamanho da Fonte</p>
        <div class="flex items-center gap-4 mb-4">
          <span class="text-sm">A</span>
          <Slider v-model="tamanhoFonte" class="flex-1" :min="12" :max="20" />
          <span class="text-xl">A</span>
        </div>
        <p class="text-center text-gray-500 dark:text-gray-400" :style="{ fontSize: `${tamanhoFonte}px` }">
          Exemplo de texto
        </p>
      </div>

      <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-800">
        <div class="flex-1">
          <p class="font-medium mb-1">Seguir Configurações do Sistema</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Ajustar tema automaticamente
          </p>
        </div>
        <InputSwitch v-model="seguirSistema" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSwitch from 'primevue/inputswitch'
import Slider from 'primevue/slider'
import ThemeToggle from '../components/ThemeToggle.vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode } = useTheme()

const seguirSistema = ref(false)
const tamanhoFonte = ref(16)
</script>
