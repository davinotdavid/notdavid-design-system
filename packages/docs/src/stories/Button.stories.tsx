import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@notdavid-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
