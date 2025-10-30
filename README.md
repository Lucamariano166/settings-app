# Vue Settings App - Desafio Técnico

Aplicação de configurações desenvolvida com Vue 3, inspirada em aplicativos modernos como WhatsApp e Instagram.

## 🚀 Stack Tecnológica

### Core
- **Vue 3** - Framework progressivo JavaScript
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Vue Router** - Gerenciamento de rotas

### UI & Styling
- **PrimeVue** - Biblioteca de componentes UI
- **Tailwind CSS** - Framework CSS utility-first
- **PrimeIcons** - Biblioteca de ícones
- **Tema Aura (PrimeVue)** - Sistema de temas com suporte claro/escuro

### Desenvolvimento & Qualidade
- **Storybook** - Documentação de componentes
- **TanStack Query (Vue Query)** - Gerenciamento de estado e requisições

## 📋 Funcionalidades Implementadas

### ✅ Sistema de Rotas
- `/settings` - Tela principal com menu de configurações
- `/settings/privacidade` - Configurações de privacidade
- `/settings/conta` - Gerenciamento de conta
- `/settings/notificacoes` - Preferências de notificações
- `/settings/aparencia` - Personalização de tema
- `/settings/seguranca` - Configurações de segurança

### ✅ Componentes Principais

#### SettingsMenu
Menu lateral de navegação com:
- Itens de menu com ícones e labels
- Indicador visual de rota ativa
- Botão de logout
- Responsivo (desktop e mobile)

#### ThemeToggle
Toggle de alternância de tema:
- Modo claro/escuro
- Persistência com localStorage
- Ícones visuais (sol/lua)

#### LogoutConfirmDialog
Modal de confirmação:
- Usa DynamicDialog do PrimeVue
- Botões de cancelar e confirmar
- Design responsivo

### ✅ Views de Configurações

1. **Privacidade**: Controle de perfil privado, status online, bloqueios
2. **Conta**: Edição de informações pessoais e senha
3. **Notificações**: Preferências de push, email e modo não perturbe
4. **Aparência**: Toggle de tema, tamanho de fonte, cores de destaque
5. **Segurança**: 2FA, sessões ativas, histórico de login

### ✅ Responsividade Mobile
- Menu adaptativo (lista em mobile, sidebar em desktop)
- Botão de voltar em mobile
- Layout fluido e responsivo

### ✅ TanStack Query
- Hook `useUserProfile` para buscar dados do usuário
- Simulação de API com delay
- Cache de 5 minutos (staleTime)

### ✅ Tema Claro/Escuro
- Toggle funcional em tempo real
- Persistência com localStorage
- Classes CSS condicionais
- Suporte completo do PrimeVue Aura theme

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalar Dependências

```bash
npm install
```

### Rodar o Projeto em Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Rodar o Storybook

```bash
npm run storybook
```

Acesse: `http://localhost:6006`

### Build de Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── SettingsMenu.vue
│   ├── ThemeToggle.vue
│   ├── LogoutConfirmDialog.vue
│   └── *.stories.ts     # Stories do Storybook
├── views/               # Views/Páginas
│   ├── SettingsLayout.vue
│   ├── SettingsHome.vue
│   ├── PrivacidadeView.vue
│   ├── ContaView.vue
│   ├── NotificacoesView.vue
│   ├── AparenciaView.vue
│   └── SegurancaView.vue
├── composables/         # Composables Vue
│   ├── useTheme.ts
│   └── useUserProfile.ts
├── router/              # Configuração de rotas
│   └── index.ts
├── types/               # Tipos TypeScript
│   └── index.ts
├── App.vue             # Componente raiz
├── main.ts             # Entry point
└── style.css           # Estilos globais
```

## 🎨 Componentes Documentados no Storybook

1. **ThemeToggle** - Toggle de tema claro/escuro
   - Estados: Default, Light Mode, Dark Mode

2. **SettingsMenu** - Menu lateral de navegação
   - Estados: Default, Light Theme, Dark Theme, Mobile

3. **LogoutConfirmDialog** - Modal de confirmação
   - Estados: Default, Dark Mode, Mobile

## 💡 Decisões Técnicas

### Arquitetura
- **Composables**: Lógica reutilizável encapsulada em composables (useTheme, useUserProfile)
- **TypeScript**: Interfaces para tipagem forte em MenuItem e UserProfile
- **Componentização**: Separação clara entre componentes de UI e views

### Roteamento
- Uso de rotas aninhadas com children no Vue Router
- Layout persistente com menu lateral sempre visível (desktop)
- Navegação adaptativa em mobile (menu OU conteúdo)

### Tema
- Sistema de classes CSS (.dark-mode) para controle de tema
- PrimeVue Aura preset com darkModeSelector configurado
- localStorage para persistir preferência do usuário
- Inicialização do tema baseada em preferência salva ou sistema

### Estado
- TanStack Query para cache inteligente de dados
- Composables para estado reativo compartilhado
- Sem necessidade de Pinia/Vuex para esse escopo

### Estilização
- Tailwind para utility classes
- PrimeVue para componentes complexos (Card, Button, InputSwitch, etc)
- Combinação harmoniosa de ambos

### Mobile First
- Breakpoint em 768px (md: no Tailwind)
- Menu fullscreen em mobile
- Botão de voltar para navegação

## 🔧 Scripts Disponíveis

```json
{
  "dev": "vite",
  "build": "vue-tsc -b && vite build",
  "preview": "vite preview",
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build"
}
```

## 📦 Dependências Principais

```json
{
  "vue": "^3.5.13",
  "vue-router": "^4.4.0",
  "@tanstack/vue-query": "^5.62.7",
  "primevue": "^4.3.1",
  "primeicons": "^7.0.0",
  "@primevue/themes": "^4.3.1",
  "tailwindcss": "^3.4.17"
}
```

## ✨ Próximas Melhorias (Diferenciais)

- [ ] Testes unitários com Vitest
- [ ] Animações e transições suaves
- [ ] Melhorias de acessibilidade (a11y)
- [ ] PWA (Progressive Web App)
- [ ] Deploy (Vercel/Netlify)
- [ ] Documentação técnica adicional

## 📝 Observações

- O projeto foi desenvolvido seguindo as especificações do desafio técnico
- Dados são mockados (não há backend real)
- O logout apenas exibe mensagem no console
- Código escrito com boas práticas e pensando em produção
- Commits organizados e descritivos

## 👤 Autor

Desenvolvido para o desafio técnico de Desenvolvedor Frontend.

## 📄 Licença

MIT
