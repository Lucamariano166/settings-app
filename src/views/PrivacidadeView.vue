<template>
  <div class="max-w-2xl p-8">
    <h1 class="text-xl font-semibold mb-2">Privacidade</h1>
    <p class="text-gray-600 text-sm mb-8">
      Gerencie suas configurações de privacidade e dados
    </p>

    <div class="divide-y divide-gray-200">

      <div class="flex items-start justify-between py-4">
        <div class="flex-1 pr-4">
          <p class="font-medium mb-1">Perfil Privado</p>
          <p class="text-sm text-gray-600">
            Apenas pessoas conectadas podem ver seu perfil
          </p>
        </div>
        <InputSwitch v-model="perfilPrivado" />
      </div>

      <div class="flex items-start justify-between py-4">
        <div class="flex-1 pr-4">
          <p class="font-medium mb-1">Status Online</p>
          <p class="text-sm text-gray-600">
            Mostrar quando você está ativo
          </p>
        </div>
        <InputSwitch v-model="statusOnline" />
      </div>

      <button class="flex items-center justify-between w-full py-4 text-left">
        <div>
          <p class="font-medium mb-1">Perfis Bloqueados</p>
          <p class="text-sm text-gray-600">
            Gerencie usuários bloqueados
          </p>
        </div>
        <i class="pi pi-chevron-right text-gray-400"></i>
      </button>

      <button class="flex items-center justify-between w-full py-4 text-left">
        <div>
          <p class="font-medium mb-1">Palavras Ocultas</p>
          <p class="text-sm text-gray-600">
            Ocultar comentários com palavras específicas
          </p>
        </div>
        <i class="pi pi-chevron-right text-gray-400"></i>
      </button>

      <button class="flex items-center justify-between w-full py-4 text-left">
        <div>
          <p class="font-medium mb-1">Baixar Seus Dados</p>
          <p class="text-sm text-gray-600">
            Solicite uma cópia dos seus dados
          </p>
        </div>
        <i class="pi pi-chevron-right text-gray-400"></i>
      </button>

      <button class="flex items-center justify-between w-full py-4 text-left text-red-600">
        <div>
          <p class="font-medium mb-1">Excluir Conta</p>
          <p class="text-sm">
            Remover permanentemente sua conta
          </p>
        </div>
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSwitch from 'primevue/inputswitch'

const perfilPrivado = ref(false)
const statusOnline = ref(true)
</script>
