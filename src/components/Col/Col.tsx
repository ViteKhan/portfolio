import { chakra, Flex } from '@chakra-ui/react';

export const Col = chakra(Flex, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});