import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '../components'


const meta = {
    title: 'Example/Select',
    component: Select,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        defaultOption: 'This is a example',
        children: []
    },
};


