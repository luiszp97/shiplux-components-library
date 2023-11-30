import type { Meta, StoryObj } from '@storybook/react'
import { CheckInput } from '../components'


const meta = {
    title: 'Forms/CheckInput',
    component: CheckInput,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {

    },
} satisfies Meta<typeof CheckInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        icon: '/public/van.svg',
        label: 'Suv',
        primary: true,
        direction: 'column',
    },
};


