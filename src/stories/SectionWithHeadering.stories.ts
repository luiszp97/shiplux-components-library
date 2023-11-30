import type { Meta, StoryObj } from '@storybook/react'
import { SectionWithHeadering } from '../components'


const meta = {
    title: 'Example/SectionWithHeadering',
    component: SectionWithHeadering,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof SectionWithHeadering>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Customers speak loud',
        headering: 'reviews',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, beatae repellendus alias voluptatum perferendis, minus, praesentium corrupti amet tempore in nihil quas fugiat explicabo a veritatis velit quaerat id! ',
        flexDirection: 'column'
    },
};


