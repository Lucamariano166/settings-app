import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})

import { useTheme } from './useTheme'

beforeEach(() => localStorage.clear())

describe('useTheme', () => {
    const mountComposable = () => {
        const wrapper = mount(defineComponent({
            setup() {
                const theme = useTheme()
                return { theme } 
            },
            template: '<div />',
        }))
        return wrapper
    }

    it('inicia no tema claro se não houver localStorage', async () => {
        const wrapper = mountComposable()
        await nextTick()
        const { isDarkMode } = wrapper.vm.theme
        expect(isDarkMode.value).toBe(false)
    })

    it('inicia no tema escuro se localStorage estiver setado', async () => {
        localStorage.setItem('theme', 'dark')
        const wrapper = mountComposable()
        await nextTick()
        const { isDarkMode } = wrapper.vm.theme
        expect(isDarkMode.value).toBe(true)
    })

    it('toggleTheme alterna o tema', async () => {
        const wrapper = mountComposable()
        await nextTick()
        const { isDarkMode, toggleTheme } = wrapper.vm.theme
        expect(isDarkMode.value).toBe(false)
        toggleTheme()
        await nextTick()
        expect(isDarkMode.value).toBe(true)
    })
})
