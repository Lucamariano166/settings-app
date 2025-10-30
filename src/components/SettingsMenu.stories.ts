import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SettingsMenu from './SettingsMenu.vue'

const meta = {
  title: 'Components/SettingsMenu',
  component: SettingsMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Menu lateral de navegação de configurações. Inclui itens de menu e botão de logout com confirmação via DynamicDialog.'
      }
    }
  }
} satisfies Meta<typeof SettingsMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Menu de configurações em seu estado padrão.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div style="height: 600px;"><story /></div>'
    })
  ]
}

export const LightTheme: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Menu de configurações com tema claro.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div style="height: 600px;" class="bg-white"><story /></div>'
    })
  ]
}

export const DarkTheme: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Menu de configurações com tema escuro.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div style="height: 600px;" class="dark-mode bg-gray-950"><story /></div>'
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
        story: 'Menu de configurações em visualização mobile.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div style="height: 600px; max-width: 375px;"><story /></div>'
    })
  ]
}
