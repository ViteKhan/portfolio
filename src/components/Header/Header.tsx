import { Flex } from '@chakra-ui/react';
import { LangSwitcher } from '../LangSwitcher';
import { Navbar } from '../Navbar';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <Flex as={'header'}>
      <Navbar/>
      <ThemeSwitcher/>
      <LangSwitcher/>
    </Flex>
  );
};
