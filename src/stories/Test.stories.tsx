import type { Meta, StoryObj } from '@storybook/react';

import { Test } from './Test';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Test',
  component: Test,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Test',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Test',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Test',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Test',
  },
};
