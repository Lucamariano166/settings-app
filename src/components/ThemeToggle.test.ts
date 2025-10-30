import { render, fireEvent } from '@testing-library/vue'
import ThemeToggle from './ThemeToggle.vue'
import { beforeAll } from 'vitest'

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => { },
            removeListener: () => { },
            addEventListener: () => { },
            removeEventListener: () => { },
            dispatchEvent: () => false,
        }),
    })
})

describe('ThemeToggle', () => {
    it('renderiza o toggle', () => {
        const { getByRole } = render(ThemeToggle)
        const toggle = getByRole('switch')
        expect(toggle).toBeTruthy()
    })

    it('alterna o tema ao clicar', async () => {
        const { getByRole } = render(ThemeToggle)
        const toggle = getByRole('switch') as HTMLInputElement

        expect(toggle.checked).toBe(false) 
        await fireEvent.click(toggle)
        expect(toggle.checked).toBe(true) 
        await fireEvent.click(toggle)
        expect(toggle.checked).toBe(false) 
    })
})
