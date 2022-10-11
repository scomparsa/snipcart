import { memo, useEffect, useState } from 'react'
import { Box, Button, Container, Divider, Flex, Heading, VStack, useDisclosure } from '@chakra-ui/react'
import starryNightImgUrl from 'assets/starry-night.jpg'
import irisesImgUrl from 'assets/irises.jpg'
import type { GoodsDatumType, CartQuantityMapping } from './interface'
import Context from './context'
import GoodsList from './components/goods-list'
import CartDrawer from './components/cart-drawer'

const MOCK_GOODS_DATUM: GoodsDatumType = [
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

export default memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [drawerSize, setDrawerSize] = useState('md')
  const [cartQuantityMapping, setCartQuantityMapping] = useState(
    MOCK_GOODS_DATUM.reduce((previousValue: CartQuantityMapping, currentValue) => {
      previousValue[currentValue.id] = 0

      return previousValue
    }, {})
  )
  const total = MOCK_GOODS_DATUM.reduce((previousValue: number, { id, price }) => {
    previousValue += price * cartQuantityMapping[id]

    return previousValue
  }, 0).toFixed(2)

  useEffect(() => {
    if (drawerSize === 'full') {
      onOpen()
    }
  }, [drawerSize, onOpen])

  return (
    <Context.Provider
      value={{
        goodsDatum: MOCK_GOODS_DATUM,
        total,
        cartQuantityMapping,
        setCartQuantityMapping,
        setDrawerSize,
      }}
    >
      <Container maxW="1000px">
        <VStack align="flex-start" spacing={10}>
          <Heading width="100%" marginTop="20px" size="xl">
            <Flex justify="space-between">
              <Box>React Shopping Cart</Box>
              <Box>
                <Button colorScheme="green" onClick={onOpen}>{`View cart (Total: $${total})`}</Button>
              </Box>
            </Flex>
          </Heading>
          <Divider />
          <GoodsList
            goodsDatum={MOCK_GOODS_DATUM}
            onOpen={onOpen}
            cartQuantityMapping={cartQuantityMapping}
            setCartQuantityMapping={setCartQuantityMapping}
          />
          <CartDrawer drawerSize={drawerSize} isOpen={isOpen} onClose={onClose} setDrawerSize={setDrawerSize} />
          <footer />
        </VStack>
      </Container>
    </Context.Provider>
  )
})
