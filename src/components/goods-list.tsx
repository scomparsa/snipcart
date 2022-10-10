import { memo, useCallback, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { GoodsDatumType, CartQuantityMapping, SetCartQuantityMappingType } from '../interface'

interface Props {
  goodsDatum: GoodsDatumType
  cartQuantityMapping: CartQuantityMapping
  setCartQuantityMapping: SetCartQuantityMappingType
  onOpen: () => void
}

export default memo<Props>(({ goodsDatum, cartQuantityMapping, setCartQuantityMapping, onOpen }) => {
  const [quantityMapping, setQuantityMapping] = useState(
    goodsDatum.reduce((previousValue: { [key: string]: number }, currentValue) => {
      previousValue[currentValue.id] = 1

      return previousValue
    }, {})
  )

  const handleQuantityChange = useCallback(
    (id: number, quantity: number) => {
      setQuantityMapping((quantityMapping) => {
        quantityMapping[id] = quantity

        return quantityMapping
      })
    },
    [setQuantityMapping]
  )

  const handleAddToCart = useCallback(
    (id: number) => {
      setCartQuantityMapping((cartQuantityMapping) => {
        cartQuantityMapping[id] += quantityMapping[id]

        return { ...cartQuantityMapping }
      })

      onOpen()
    },
    [cartQuantityMapping, quantityMapping, setCartQuantityMapping, onOpen]
  )

  return (
    <List width="100%">
      {goodsDatum.map(({ id, cover, name, desc, price }, idx) => (
        <ListItem key={id} marginTop={!!idx ? 20 : 0}>
          <Flex justify="space-between" flexDirection={!!(idx % 2) ? 'row-reverse' : 'row'}>
            <Box w="50%">
              <VStack align="flex-start" spacing={4}>
                <Heading size="lg">{name}</Heading>
                <Heading size="md" fontWeight={400}>
                  {desc}
                </Heading>
                <Box>
                  <Text fontSize="sm" color="gray">
                    QUANTITY
                  </Text>
                  <NumberInput
                    width={100}
                    min={1}
                    precision={0}
                    step={1}
                    defaultValue={1}
                    onChange={(quantity) => {
                      handleQuantityChange(id, Number(quantity))
                    }}
                  >
                    <NumberInputField readOnly />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
                <HStack spacing={10}>
                  <Text fontWeight="bold" fontSize="xl">
                    {`$${price}`}
                  </Text>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      handleAddToCart(id)
                    }}
                  >
                    ADD TO CART
                  </Button>
                </HStack>
              </VStack>
            </Box>
            <Image src={cover} htmlWidth="400px" objectFit="cover" />
          </Flex>
        </ListItem>
      ))}
    </List>
  )
})
