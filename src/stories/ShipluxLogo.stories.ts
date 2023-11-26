import type { Meta, StoryObj } from '@storybook/react'
import { ShipluxLogo } from '../components'


const meta = {
    title: 'Example/ShipluxLogo',
    component: ShipluxLogo,
    parameters: {

        layout: 'centered',
    },

    argTypes: {

    },
} satisfies Meta<typeof ShipluxLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        color: '#000',
        width: '200',
        height: '100'
    },
};


