import { IconButton, useColorMode } from '@chakra-ui/react';
import { BsFillSunFill } from 'react-icons/bs'
import { PiMoonFill } from 'react-icons/pi';
import { THEME } from '../../types';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={'theme'}
      variant={'theme'}
      onClick={toggleColorMode}
      icon={colorMode === THEME.LIGHT ? <PiMoonFill/> : <BsFillSunFill/>}
      isRound
    />
  );
};