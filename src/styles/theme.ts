import { extendTheme } from '@chakra-ui/react';
import { radii } from './border-radius';
import { space } from './space';
import { typography } from './typography';

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading: 'Eudoxus Sans Medium, sans-serif',
    body: 'Eudoxus Sans Medium, sans-serif',
  },
  ...typography,
  space,
  radii,
});