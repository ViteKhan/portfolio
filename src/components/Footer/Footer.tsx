import { Box, chakra } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const FooterContainer = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60px',
    px: ['sm', 'md', 'lg'],
    py: 'sm',
    backdropFilter: 'blur(4px)',
  },
});

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer as={'footer'}>
      {t('footer')}
    </FooterContainer>
  );
};