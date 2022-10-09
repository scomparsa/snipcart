import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Container, DrawerFooter, HStack, Text, VStack } from '@chakra-ui/react'

export default function CartDrawerFooter() {
  return (
    <DrawerFooter>
      <Container>
        <VStack align="flex-start">
          <Text color="gray" fontSize="sm" fontWeight="light">
            Shipping and taxes will be calculated at checkout.
          </Text>
          <HStack justify="space-between" width="100%">
            <Text>Total</Text>
            <Text>$200</Text>
          </HStack>
          <Button width="100%" colorScheme="blue">
            Checkout
            <ArrowForwardIcon position="absolute" right="4" />
          </Button>
        </VStack>
      </Container>
    </DrawerFooter>
  )
}
