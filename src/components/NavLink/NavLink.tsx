import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ReactRouterLink, useMatch } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

interface NavLinkProps {
  to: string;
  title: string;
  icon: ReactElement;
  onClick?: () => void;
}

export const NavLink: FC<NavLinkProps> = ({ to, title, icon, onClick }) => {
  const { t } = useTranslation();
  const match = useMatch(to);

  return (
    <ChakraLink
      variant={'navigation'}
      as={ReactRouterLink}
      to={to}
      title={t(title)}
      onClick={onClick}
      color={!!match ? 'blue.500' : undefined}
    >
      {icon}
      {t(title)}
    </ChakraLink>
  );
};