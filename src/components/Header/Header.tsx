import { Box, chakra, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Row } from '../Row';
import { Sidebar } from '../Sidebar';
import { Switchers } from '../Switchers';

const HeaderContainer = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    px: ['sm', 'md', 'lg'],
    py: 'sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const Header = () => {
  const isNavbarVisible = useBreakpointValue({ base: false, md: false, lg: true });
  const boxShadow = useColorModeValue(
    '0 2px 4px rgba(179, 185, 196, 0.4)',
    '0 2px 4px rgba(69, 79, 89, 0.4)'
  );

  return (
    <HeaderContainer as={'header'} boxShadow={boxShadow}>
      <Row>
        {!isNavbarVisible && <Sidebar/>}
        <Logo/>
      </Row>
      <Row gap={'lg'}>
        {isNavbarVisible && <Navbar/>}
        <Switchers/>
      </Row>
    </HeaderContainer>
  );
};
