import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LogoutConfirmDialog from './LogoutConfirmDialog.vue'

const meta = {
  title: 'Components/LogoutConfirmDialog',
  component: LogoutConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal de confirmação de logout. É usado através do DynamicDialog do PrimeVue para confirmar quando o usuário deseja sair da aplicação.'
      }
    }
  }
} satisfies Meta<typeof LogoutConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado padrão do modal de confirmação de logout.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="p-6 bg-white rounded-lg shadow-lg" style="max-width: 450px;"><story /></div>'
    })
  ]
}

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Modal de confirmação em tema escuro.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="dark-mode p-6 bg-gray-900 rounded-lg shadow-lg" style="max-width: 450px;"><story /></div>'
    })
  ]
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Modal de confirmação em visualização mobile.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="p-4 bg-white rounded-lg shadow-lg" style="max-width: 100%;"><story /></div>'
    })
  ]
}
