import type { Meta, StoryObj } from '@storybook/react'
import { Headering } from '../components'


const meta = {
    title: 'Text/Headering',
    component: Headering,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Headering>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Reviews',

    },
};


