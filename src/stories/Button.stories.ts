import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components'


const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    sizes: 'small',
    lable: 'Button example',
  },
}

export const Medium: Story = {
  args: {
    sizes: 'medium',
    lable: 'Button example',
  },
}

export const Large: Story = {
  args: {
    sizes: 'large',
    lable: 'Button example',
  },
}


