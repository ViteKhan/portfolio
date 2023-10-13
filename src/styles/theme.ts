import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { radii } from './border-radius';
import { colors } from './colors';
import { Button } from './components/button';
import { Link } from './components/link';
import { space } from './space';
import { typography } from './typography';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(colors.light.background, colors.dark.background)(props),
      color: mode(colors.light.primary, colors.dark.primary)(props),
      fontSize: 'md',
      fontWeight: 'normal',
    },
  }),
};

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
  components: { Button, Link },
  space,
  radii,
  colors,
  styles,
});