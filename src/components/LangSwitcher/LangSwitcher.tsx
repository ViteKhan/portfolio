import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../constants';
import { IoLanguageSharp } from 'react-icons/io5';

export const LangSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <Menu isLazy >
      <MenuButton as={Button} variant={'lang'} leftIcon={<IoLanguageSharp/>}>
        {i18n.language.toUpperCase()}
      </MenuButton>
      <MenuList>
        {LANGUAGES.map(({ id, name, icon }) => (
          <MenuItem
            key={id}
            onClick={() => i18n.changeLanguage(id)}
            gap={'xs'}
          >
            {icon} {t(name)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};