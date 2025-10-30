<template>
  <div class="flex items-center gap-3">
    <i class="pi pi-sun text-xl text-yellow-500"></i>
    <InputSwitch
      v-model="isDarkMode"
      @change="toggleTheme"
    />
    <i class="pi pi-moon text-xl text-blue-500"></i>
  </div>
</template>

<script setup lang="ts">
import InputSwitch from 'primevue/inputswitch'
import { useTheme } from '../composables/useTheme'

const { isDarkMode, toggleTheme } = useTheme()
</script>
