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

interface Props {
  goodsDatum: { id: number; cover: string; name: string; desc: string; price: number }[]
  onOpen: () => void
}

export default function GoodsList({ goodsDatum, onOpen }: Props) {
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
                  <NumberInput width={100} min={1} precision={0} step={1}>
                    <NumberInputField />
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
                  <Button colorScheme="blue" onClick={onOpen}>
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
}
