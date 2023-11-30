import type { Meta, StoryObj } from '@storybook/react'
import { ReviewCard } from '../components'


const meta = {
    title: 'Cards/ReviewCard',
    component: ReviewCard,
    parameters: {

        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {

    },
} satisfies Meta<typeof ReviewCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        name: 'Luis Parra',
        rating: 4,
        ratingIcon: 'https://www.shiplux.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FReviewLight.e809c86b.png&w=384&q=75',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio in et vero nihil est tempore veritatis harum quia itaque! Quidem provident ex nam atque facere placeat consequatur facilis ea molestias.',
        date: '03 de March 2023',
        reviewLogo: 'https://www.shiplux.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FReviewLight.e809c86b.png&w=384&q=75'
    },
};


