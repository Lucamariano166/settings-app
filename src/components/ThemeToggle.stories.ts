import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ThemeToggle from './ThemeToggle.vue'

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de alternância de tema claro/escuro. Utiliza localStorage para persistir a preferência do usuário.'
      }
    }
  }
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado padrão do toggle de tema.'
      }
    }
  }
}

export const LightMode: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toggle em modo claro.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="p-6 bg-white"><story /></div>'
    })
  ]
}

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toggle em modo escuro.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="dark-mode p-6 bg-gray-900"><story /></div>'
    })
  ]
}
