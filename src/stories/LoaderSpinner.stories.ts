import type { Meta, StoryObj } from '@storybook/react'
import { LoaderSpinner } from '../components'


const meta = {
    title: 'Example/LoaderSpinner',
    component: LoaderSpinner,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof LoaderSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        color: 'blue',
        isSpinner: true
    },
};


