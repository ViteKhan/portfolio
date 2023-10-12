import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../constants';

interface NavbarProps {
  direction?: 'column' | 'row';
}

export const Navbar: FC<NavbarProps> = ({ direction = 'row' }) => {
  const { t } = useTranslation();

  return (
    <Flex gap={'sm'} flexDirection={direction}>
      <Link to={RoutePath.skills}>{t('Skills')}</Link>
      <Link to={RoutePath.experience}>{t('Experience')}</Link>
      <Link to={RoutePath.education}>{t('Education')}</Link>
      <Link to={RoutePath.projects}>{t('Projects')}</Link>
      <Link to={RoutePath.feedback}>{t('Feedback')}</Link>
    </Flex>
  );
};