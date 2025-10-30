<template>
  <div class="p-6">
    <div class="flex items-center gap-4 mb-6">
      <i class="pi pi-exclamation-triangle text-4xl text-yellow-500"></i>
      <div>
        <h3 class="text-xl font-semibold mb-1">Tem certeza que deseja sair?</h3>
        <p class="text-surface-600 dark:text-surface-400">
          Você será desconectado da sua conta.
        </p>
      </div>
    </div>

    <div class="flex gap-3 justify-end">
      <Button
        label="Cancelar"
        severity="secondary"
        @click="closeDialog"
      />
      <Button
        label="Confirmar"
        severity="danger"
        @click="confirmLogout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from 'primevue/button'
import type { DynamicDialogInstance } from 'primevue/dynamicdialogoptions'

const dialogRef = inject<DynamicDialogInstance>('dialogRef')

const closeDialog = () => {
  dialogRef?.close()
}

const confirmLogout = () => {
  console.log('Usuário confirmou logout')
  dialogRef?.close()
}
</script>
