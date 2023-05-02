import {Meta, StoryObj} from '@storybook/react'
import Loique from '../components/Loique';
import {action} from '@storybook/addon-actions'

const meta: Meta<typeof Loique> = {
    title: "Loique",
    component: Loique,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Loique>;


export const Primary: Story = {
    args:{
        children:'Primary Button',
        onClick: action('Primary click')
    }
};


export const Secondary: Story = {
    args : {
        variant: 'secondary',
        children: "I'm Secondary",
        onClick: action('Secondary click')
    }
}


