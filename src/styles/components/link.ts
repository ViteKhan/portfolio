import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const navigation = defineStyle({
  display: 'flex',
  alignItems: 'center',
  gap: 'xs',
  _hover: {
    color: 'blue.500',
    textDecoration: 'none',
  },
  _active: {
    color: 'blue.500',
  },
});

export const Link = defineStyleConfig({
  variants: { navigation },
});