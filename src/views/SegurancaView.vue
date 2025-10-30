<template>
  <div class="max-w-2xl p-8">
    <h1 class="text-xl font-semibold mb-2">Segurança</h1>
    <p class="text-gray-600 text-sm mb-8">
      Proteja sua conta e seus dados
    </p>

    <div class="divide-y divide-gray-200">
      <div class="py-6">
        <h2 class="text-lg font-semibold mb-4">Autenticação de Dois Fatores</h2>

        <div class="flex items-start justify-between">
          <div class="flex-1 pr-4">
            <p class="font-medium mb-1">Ativar 2FA</p>
            <p class="text-sm text-gray-600">
              Adicione uma camada extra de segurança à sua conta
            </p>
          </div>
          <InputSwitch v-model="autenticacao2FA" />
        </div>
      </div>

      <div class="py-6">
        <h2 class="text-lg font-semibold mb-4">Sessões Ativas</h2>
        <p class="text-sm text-gray-600 mb-4">
          Gerencie dispositivos conectados à sua conta
        </p>

        <div class="space-y-3">
          <div
            v-for="sessao in sessoes"
            :key="sessao.id"
            class="flex items-center justify-between py-3 border border-gray-200"
            style="padding: 12px; border-radius: 8px;"
          >
            <div class="flex items-center gap-3">
              <i :class="sessao.icon" class="text-2xl text-gray-600"></i>
              <div>
                <p class="font-medium">{{ sessao.dispositivo }}</p>
                <p class="text-sm text-gray-600">
                  {{ sessao.local }} • {{ sessao.data }}
                </p>
              </div>
            </div>
            <Button
              v-if="!sessao.atual"
              label="Encerrar"
              severity="danger"
              outlined
              size="small"
            />
            <Tag v-else value="Atual" severity="success" />
          </div>
        </div>

        <Button
          label="Encerrar Todas as Sessões"
          severity="danger"
          outlined
          class="w-full mt-4"
        />
      </div>

      <div class="py-6">
        <h2 class="text-lg font-semibold mb-2">Histórico de Login</h2>
        <p class="text-sm text-gray-600 mb-4">
          Veja os últimos acessos à sua conta
        </p>
        <Button label="Ver Histórico Completo" icon="pi pi-history" outlined />
      </div>

      <div class="py-6">
        <h2 class="text-lg font-semibold mb-2">Permissões de Aplicativos</h2>
        <p class="text-sm text-gray-600 mb-4">
          Gerencie aplicativos com acesso à sua conta
        </p>
        <Button label="Gerenciar Permissões" icon="pi pi-cog" outlined />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

const autenticacao2FA = ref(false)

const sessoes = ref([
  {
    id: 1,
    dispositivo: 'Chrome no Windows',
    local: 'São Paulo, Brasil',
    data: 'Agora',
    icon: 'pi pi-desktop',
    atual: true
  },
  {
    id: 2,
    dispositivo: 'Safari no iPhone',
    local: 'São Paulo, Brasil',
    data: 'Há 2 dias',
    icon: 'pi pi-mobile',
    atual: false
  },
  {
    id: 3,
    dispositivo: 'Firefox no Linux',
    local: 'Rio de Janeiro, Brasil',
    data: 'Há 1 semana',
    icon: 'pi pi-desktop',
    atual: false
  }
])
</script>

