import type { Meta, StoryObj } from '@storybook/react'
import { ShipDateCard } from '../components'


const meta = {
    title: 'Cards/ShipDateCard',
    component: ShipDateCard,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ShipDateCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        price: 0,
        deliveryDates: '28 - 30 Mar',
        originDates: '26 - 28 Mar'
    },
};


