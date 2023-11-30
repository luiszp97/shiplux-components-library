import type { Meta, StoryObj } from '@storybook/react'
import { ShipluxLogo } from '../components'


const meta = {
    title: 'SVG/ShipluxLogo',
    component: ShipluxLogo,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],
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


