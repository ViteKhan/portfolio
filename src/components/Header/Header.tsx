import { Box, chakra, useBreakpointValue } from '@chakra-ui/react';
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
    height: '50px',
    background: 'gray',
    px: 'lg',
    py: 'sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const Header = () => {
  const isNavbarVisible = useBreakpointValue({ base: false, md: true });
  return (
    <HeaderContainer as={'header'}>
      <Row>
        {!isNavbarVisible && <Sidebar/>}
        <Logo/>
      </Row>
      <Row>
        {isNavbarVisible && <Navbar/>}
        <Switchers/>
      </Row>
    </HeaderContainer>
  );
};
