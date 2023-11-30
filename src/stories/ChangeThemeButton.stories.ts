import type { Meta, StoryObj } from '@storybook/react'
import { ChangeThemeButton } from '../components'


const meta = {
    title: 'Buttons/ChangeThemeButton',
    component: ChangeThemeButton,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ChangeThemeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        darkIcon: 'https://www.shiplux.com/_next/static/media/keyboard_arrow_right.99c4df12.svg',
        lightIcon: 'https://www.shiplux.com/_next/static/media/keyboard_arrow_right.99c4df12.svg'
    },
}