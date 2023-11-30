import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../components'

const meta = {
    title: 'Text/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'h1',
        children: 'Example text',
        align: 'center',
    },
};


