import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Flex as={'footer'}>
      {t('footer')}
    </Flex>
  );
};