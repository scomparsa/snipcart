import { memo, useCallback } from 'react'
import {
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
} from '@chakra-ui/react'
import { SetDrawerSizeType } from '../../interface'
import CartDrawerBody from './cart-drawer-body'
import CartDrawerFooter from './cart-drawer-footer'

interface Props {
  drawerSize?: string
  isOpen: boolean
  onClose: () => void
  setDrawerSize: SetDrawerSizeType
}

export default memo<Props>(({ drawerSize, isOpen, onClose, setDrawerSize }: Props) => {
  const isFullSize = drawerSize === 'full'
  const drawerContentWidth = isFullSize ? '1000px' : '100%'

  const handleClose = useCallback(() => {
    if (isFullSize) {
      setDrawerSize('md')
    }

    onClose()
  }, [drawerSize, setDrawerSize])

  return (
    <Drawer size={drawerSize} isOpen={isOpen} onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={isFullSize ? '#EFEFEF' : '#FFF'}>
        <DrawerCloseButton />
        {isFullSize ? (
          <Center margin="20px auto" width={drawerContentWidth}>
            <Heading size="sm">Cart summary</Heading>
          </Center>
        ) : (
          <DrawerHeader bgColor="#EFEFEF" fontWeight="400">
            Cart summary
          </DrawerHeader>
        )}
        <CartDrawerBody isFullSize={isFullSize} drawerContentWidth={drawerContentWidth} />
        <CartDrawerFooter isFullSize={isFullSize} drawerContentWidth={drawerContentWidth} />
      </DrawerContent>
    </Drawer>
  )
})
