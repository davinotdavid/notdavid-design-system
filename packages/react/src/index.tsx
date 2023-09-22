import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$primary500',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '700',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      large: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariant: {
    size: 'small',
  },
})

export type ButtonProps = {
  size: 'small' | 'large'
}
