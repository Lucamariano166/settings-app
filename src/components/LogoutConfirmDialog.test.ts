import { render, fireEvent } from '@testing-library/vue'
import LogoutConfirmDialog from './LogoutConfirmDialog.vue'
import { vi } from 'vitest'

describe('LogoutConfirmDialog', () => {
    it('dispara confirmLogout e fecha o dialog', async () => {
        const closeMock = vi.fn()
        const { getByText } = render(LogoutConfirmDialog, {
            global: {
                provide: {
                    dialogRef: { close: closeMock }
                }
            }
        })

        const confirmBtn = getByText('Confirmar')
        await fireEvent.click(confirmBtn)

        expect(closeMock).toHaveBeenCalled()
    })

    it('fecha o dialog ao clicar em Cancelar', async () => {
        const closeMock = vi.fn()
        const { getByText } = render(LogoutConfirmDialog, {
            global: {
                provide: {
                    dialogRef: { close: closeMock }
                }
            }
        })

        const cancelBtn = getByText('Cancelar')
        await fireEvent.click(cancelBtn)

        expect(closeMock).toHaveBeenCalled()
    })
})
