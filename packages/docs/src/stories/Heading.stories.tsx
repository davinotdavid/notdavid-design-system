import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@notdavid-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading component will always be an `h2` but it can be changed with the prop `as`.',
      },
    },
  },
}
