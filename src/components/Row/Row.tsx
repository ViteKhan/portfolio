import { chakra, Flex } from '@chakra-ui/react';

export const Row = chakra(Flex, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 'md'
  },
});