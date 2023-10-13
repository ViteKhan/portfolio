import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { NAV_LINKS } from '../../constants';
import { NavLink } from '../NavLink';

interface NavbarProps {
  direction?: 'column' | 'row';
  onClick?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ direction = 'row', onClick }) => {

  return (
    <Flex gap={'md'} flexDirection={direction}>
      {NAV_LINKS.map(({ to, title, icon }) =>
        <NavLink
          key={to}
          to={to}
          title={title}
          icon={icon}
          onClick={onClick}
        />
      )}
    </Flex>
  );
};