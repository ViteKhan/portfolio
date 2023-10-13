import { Icon } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { RoutePath } from '../../constants';
import { HiMiniCodeBracketSquare } from 'react-icons/hi2';

export const Logo = () => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={RoutePath.home}
      variant={'navigation'}
    >
      <Icon as={HiMiniCodeBracketSquare} fontSize={'40px'}/>
      Viktor Khan
    </ChakraLink>
  );
};
