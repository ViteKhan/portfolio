import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label={'sidebar'}
        onClick={onOpen}
        icon={<GiHamburgerMenu/>}
      />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><Logo/></DrawerHeader>
          <DrawerBody>
            <Navbar direction={'column'}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};