import { Container, Divider, Heading, VStack, useDisclosure } from '@chakra-ui/react'
import starryNightImgUrl from 'assets/starry-night.jpg'
import irisesImgUrl from 'assets/irises.jpg'
import GoodsList from './components/goods-list'
import CartDrawer from './components/cart-drawer'

const MOCK_GOODS_DATUM = [
  {
    id: 1,
    name: 'Starry Night',
    desc: 'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.',
    price: 79.95,
    cover: starryNightImgUrl,
  },
  {
    id: 2,
    name: 'Irises',
    desc: 'Irises is yet again, another painting by the Dutch artist Vincent van Gogh.',
    price: 65.95,
    cover: irisesImgUrl,
  },
]

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cartDrawerProps = { isOpen, onClose }

  return (
    <Container maxW={1000}>
      <VStack align="flex-start" spacing={10}>
        <Heading width="100%" marginTop={5} size="xl">
          React Shopping Cart
        </Heading>
        <Divider />
        <GoodsList onOpen={onOpen} goodsDatum={MOCK_GOODS_DATUM} />
        <CartDrawer {...cartDrawerProps} />
      </VStack>
    </Container>
  )
}
