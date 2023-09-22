import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@notdavid-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Trying out the Box component</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
