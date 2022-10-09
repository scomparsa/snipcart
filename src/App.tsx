import { Center, VStack } from '@chakra-ui/react'
import CartDrawer from './components/cart-drawer'

export default function App() {
  return (
    <Center>
      <VStack>
        <>React Shopping Cart</>
        <CartDrawer />
      </VStack>
    </Center>
  )
}
