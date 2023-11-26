import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../components'

const meta = {
    title: 'Example/IconButton',
    component: IconButton,
    parameters: {

        layout: 'centered',
    },

    argTypes: {

    },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        icon: '/public/vite.svg',
        variant: 'text',
    },
};


