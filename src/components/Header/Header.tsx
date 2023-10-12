import { Box, chakra, useBreakpointValue } from '@chakra-ui/react';
import { LangSwitcher } from '../LangSwitcher';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { ThemeSwitcher } from '../ThemeSwitcher';

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
  },
});

export const Header = () => {
  const isNavbarVisible = useBreakpointValue({ base: false, md: true });
  return (
    <HeaderContainer as={'header'}>
      {isNavbarVisible ? <Navbar/> : <Sidebar/>}
      <ThemeSwitcher/>
      <LangSwitcher/>
    </HeaderContainer>
  );
};
