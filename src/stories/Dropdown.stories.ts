import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '../components'


const meta = {
    title: 'Example/Dropdown',
    component: Dropdown,
    parameters: {

        layout: 'centered',
    },
    argTypes: {

    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        question: 'Pregunta de ejemplo?',
        answare: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cumque maiores distinctio ipsum, eum deserunt repellat dignissimos sequi voluptatem quaerat dolores nemo impedit suscipit ut pariatur? Dolore neque minus veritatis.',
        icon: 'https://www.shiplux.com/_next/static/media/keyboard_arrow_right.99c4df12.svg'
    },
};


