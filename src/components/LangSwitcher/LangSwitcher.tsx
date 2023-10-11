import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button onClick={toggleLang}>translate</Button>
  );
};