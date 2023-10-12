import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../constants';
import { IoLanguageSharp } from 'react-icons/io5';

export const LangSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<IoLanguageSharp/>}>
        {i18n.language.toUpperCase()}
      </MenuButton>
      <MenuList>
        {LANGUAGES.map(language => (
          <MenuItem
            key={language.id}
            onClick={() => i18n.changeLanguage(language.id)}
          >
            {t(language.name)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};