import { useRef } from 'react'
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import CartDrawerBody from './cart-drawer-body'
import CartDrawerFooter from './cart-drawer-footer'

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <Button colorScheme="teal" ref={btnRef} onClick={onOpen}>
        Open
      </Button>
      <Drawer size="md" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="#EFEFEF" fontWeight="400">
            Cart summary
          </DrawerHeader>
          <CartDrawerBody />
          <CartDrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  )
}
