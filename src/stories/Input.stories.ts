import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../components'


const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {

    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        rightIcon: true,
        icon: '/public/deletedIcon.svg',
        type: 'number'
    },
};


