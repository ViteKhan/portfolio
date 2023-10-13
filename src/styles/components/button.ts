import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { THEME } from '../../types';

const lang = defineStyle(({ colorMode }) => {
  return {
    border: '1px solid',
    borderColor: colorMode === THEME.LIGHT ? 'light.border' : 'dark.border',
    px: 'sm',
    fontWeight: 'normal',
    _hover: {
      color: 'dark.primary',
      background: 'blue.500',
    },
    _active: {
      color: 'dark.primary',
      background: 'blue.500',
    },
  };
});

const theme = defineStyle(({ colorMode }) => {
  return {
    border: '1px solid',
    borderColor: colorMode === THEME.LIGHT ? 'light.border' : 'dark.border',
    _hover: {
      color: 'yellow.300',
      background: colorMode === THEME.LIGHT ? 'dark.background' : 'orange.500',
    },
    _active: {
      color: 'yellow.300',
      background: colorMode === THEME.LIGHT ? 'dark.background' : 'orange.500',
    },
  };
});

export const Button = defineStyleConfig({
  variants: { lang, theme },
});