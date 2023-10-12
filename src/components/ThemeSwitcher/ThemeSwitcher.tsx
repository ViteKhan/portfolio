import { IconButton, useColorMode } from '@chakra-ui/react';
import { ImSun } from 'react-icons/im';
import { FiMoon } from 'react-icons/fi';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={'theme'}
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <FiMoon/> : <ImSun/>}
    />
  )
};