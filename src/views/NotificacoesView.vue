<template>
  <div class="max-w-2xl p-8">
    <h1 class="text-xl font-semibold mb-2">Notificações</h1>
    <p class="text-gray-600 text-sm mb-8">
      Configure como e quando você deseja receber notificações
    </p>

    <div class="divide-y divide-gray-200">
      <div class="py-6">
        <h2 class="text-lg font-semibold mb-4">Notificações Push</h2>

        <div class="space-y-4">
          <div class="flex items-start justify-between">
            <div class="flex-1 pr-4">
              <p class="font-medium mb-1">Mensagens</p>
              <p class="text-sm text-gray-600">
                Receba notificações de novas mensagens
              </p>
            </div>
            <InputSwitch v-model="notifMensagens" />
          </div>

          <div class="flex items-start justify-between">
            <div class="flex-1 pr-4">
              <p class="font-medium mb-1">Comentários</p>
              <p class="text-sm text-gray-600">
                Quando alguém comenta em suas publicações
              </p>
            </div>
            <InputSwitch v-model="notifComentarios" />
          </div>

          <div class="flex items-start justify-between">
            <div class="flex-1 pr-4">
              <p class="font-medium mb-1">Curtidas</p>
              <p class="text-sm text-gray-600">
                Quando alguém curte seu conteúdo
              </p>
            </div>
            <InputSwitch v-model="notifCurtidas" />
          </div>
        </div>
      </div>

      <div class="py-6">
        <h2 class="text-lg font-semibold mb-4">Email</h2>

        <div class="space-y-4">
          <div class="flex items-start justify-between">
            <div class="flex-1 pr-4">
              <p class="font-medium mb-1">Resumo Semanal</p>
              <p class="text-sm text-gray-600">
                Receba um resumo das atividades da semana
              </p>
            </div>
            <InputSwitch v-model="emailSemanal" />
          </div>

          <div class="flex items-start justify-between">
            <div class="flex-1 pr-4">
              <p class="font-medium mb-1">Novidades e Atualizações</p>
              <p class="text-sm text-gray-600">
                Fique por dentro de novas funcionalidades
              </p>
            </div>
            <InputSwitch v-model="emailNovidades" />
          </div>
        </div>
      </div>

      <div class="py-6">
        <h2 class="text-lg font-semibold mb-4">Não Perturbe</h2>

        <div class="flex items-start justify-between">
          <div class="flex-1 pr-4">
            <p class="font-medium mb-1">Ativar Modo Não Perturbe</p>
            <p class="text-sm text-gray-600">
              Silenciar todas as notificações
            </p>
          </div>
          <InputSwitch v-model="naoPerturbe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSwitch from 'primevue/inputswitch'

const notifMensagens = ref(true)
const notifComentarios = ref(true)
const notifCurtidas = ref(false)
const emailSemanal = ref(true)
const emailNovidades = ref(true)
const naoPerturbe = ref(false)
</script>
