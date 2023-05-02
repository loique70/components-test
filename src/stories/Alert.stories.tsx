import {Meta, Story} from '@storybook/react'

import Alert, {Props} from '../components/Alert'


const meta: Meta = {
    title: 'Alert',
    tags: ['autodocs'],
    component: Alert
}

export default meta;

const Template: Story<Props> = args => <Alert {...args} />

export let Default = Template.bind({});

Default.args ={
    message: "Hey, How are you?"
}

