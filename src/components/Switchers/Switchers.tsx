import { Flex } from '@chakra-ui/react';
import { LangSwitcher } from '../LangSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Switchers = () => {
  return (
    <Flex gap={'sm'}>
      <ThemeSwitcher/>
      <LangSwitcher/>
    </Flex>
  );
};
