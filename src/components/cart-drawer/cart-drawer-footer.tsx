import { memo, useContext, useCallback } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Container, DrawerFooter, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import Context, { ContextType } from '../../context'
import PromoCode from './promo-code'

interface Props {
  isFullSize: boolean
  drawerContentWidth: string
}

export default memo<Props>(({ isFullSize, drawerContentWidth }) => {
  const { total, setDrawerSize } = useContext(Context) as ContextType

  const handleViewDetailed = useCallback(() => {
    setDrawerSize('full')
  }, [setDrawerSize])

  const content = (
    <VStack align="flex-start">
      <Text color="gray" fontSize="sm" fontWeight="light">
        Shipping and taxes will be calculated at checkout.
      </Text>
      <HStack justify="space-between" width="100%">
        <Text fontWeight="bold">Total</Text>
        <Text fontWeight="bold">{`$${total}`}</Text>
      </HStack>
      <Button width="100%" colorScheme="blue">
        Checkout
        <ArrowForwardIcon position="absolute" right="4" />
      </Button>
      <Spacer />
      {!isFullSize && (
        <Button width="100%" variant="link" colorScheme="blue" onClick={handleViewDetailed}>
          <Text as="u" fontSize="sm">
            View detailed cart
          </Text>
        </Button>
      )}
    </VStack>
  )

  return (
    <DrawerFooter>
      {!!Number(total) &&
        (isFullSize ? (
          <Flex justify="space-between" align="flex-start" margin="0 auto" width={drawerContentWidth}>
            <PromoCode isFullSize={isFullSize} />
            <span>{content}</span>
          </Flex>
        ) : (
          <Container>{content}</Container>
        ))}
    </DrawerFooter>
  )
})
