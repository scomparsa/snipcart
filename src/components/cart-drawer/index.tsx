import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import CartDrawerBody from './cart-drawer-body'
import CartDrawerFooter from './cart-drawer-footer'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: Props) {
  return (
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
  )
}
