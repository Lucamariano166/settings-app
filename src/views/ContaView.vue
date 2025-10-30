<template>
  <div class="max-w-2xl p-8">
    <h1 class="text-xl font-semibold mb-2">Conta</h1>
    <p class="text-gray-600 text-sm mb-8">
      Gerencie as informações da sua conta
    </p>

    <div class="divide-y divide-gray-200">

      <div class="py-4">
        <label class="block text-sm font-medium mb-2">Nome</label>
        <InputText
          v-model="nome"
          class="w-full"
          placeholder="Seu nome"
        />
      </div>

      <div class="py-4">
        <label class="block text-sm font-medium mb-2">Email</label>
        <InputText
          v-model="email"
          type="email"
          class="w-full"
          placeholder="seu@email.com"
        />
      </div>

      <div class="py-4">
        <label class="block text-sm font-medium mb-2">Telefone</label>
        <InputText
          v-model="telefone"
          class="w-full"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div class="py-4">
        <Button label="Salvar Alterações" icon="pi pi-check" class="w-full" />
      </div>

      <div class="py-6">
        <h2 class="text-lg font-semibold mb-4">Alterar Senha</h2>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Senha Atual</label>
            <Password
              v-model="senhaAtual"
              class="w-full"
              :feedback="false"
              toggleMask
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Nova Senha</label>
            <Password
              v-model="novaSenha"
              class="w-full"
              toggleMask
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Confirmar Nova Senha</label>
            <Password
              v-model="confirmarSenha"
              class="w-full"
              :feedback="false"
              toggleMask
            />
          </div>

          <Button label="Alterar Senha" icon="pi pi-key" severity="secondary" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const nome = ref('João Silva')
const email = ref('joao.silva@example.com')
const telefone = ref('(49) 99838-1023')
const senhaAtual = ref('')
const novaSenha = ref('')
const confirmarSenha = ref('')
</script>


