import { memo, useCallback, useContext } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button, DrawerBody, Flex, HStack, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import Context, { ContextType } from '../../context'
import MobileSpinner from './mobile-spinner'
import PromoCode from './promo-code'

interface Props {
  isFullSize: boolean
  drawerContentWidth: string
}

export default memo<Props>(({ isFullSize, drawerContentWidth }) => {
  const { goodsDatum, total, cartQuantityMapping, setCartQuantityMapping } = useContext(Context) as ContextType

  const handleCartQuantityClear = useCallback(
    (id: number) => {
      setCartQuantityMapping((cartQuantityMapping) => {
        cartQuantityMapping[id] = 0

        return { ...cartQuantityMapping }
      })
    },
    [setCartQuantityMapping]
  )

  const listItemStyle = {
    marginRight: '-25px',
    marginLeft: '-25px',
    marginBottom: '25px',
    padding: '35px',
    borderBottom: isFullSize ? '' : '1px solid lightgray',
    backgroundColor: isFullSize ? '#FFF' : '',
  }

  return (
    <DrawerBody margin="0 auto" width={drawerContentWidth} height="auto">
      {!Number(total) && 'Your cart is empty.'}
      <List>
        {goodsDatum
          .filter(({ id }) => !!cartQuantityMapping[id])
          .map(({ id, cover, name, desc, price }) => (
            <ListItem key={id} {...listItemStyle}>
              <VStack align="start" spacing={2}>
                <Flex justify="space-between" align="center" width="100%">
                  <HStack align={isFullSize ? 'flex-start' : 'center'} spacing={isFullSize ? 5 : 2}>
                    <Image alt="starry-night" htmlWidth={isFullSize ? '120px' : '40px'} objectFit="cover" src={cover} />
                    <VStack align="flex-start" width={isFullSize ? '400px' : '100%'}>
                      <Text fontWeight="bold" fontSize={isFullSize ? 'xl' : 'md'}>
                        {name}
                      </Text>
                      {isFullSize && (
                        <Text fontSize="sm" color="gray">
                          {desc}
                        </Text>
                      )}
                    </VStack>
                  </HStack>
                  <Button
                    borderRadius="50%"
                    width="40px"
                    bgColor="red.100"
                    onClick={() => {
                      handleCartQuantityClear(id)
                    }}
                  >
                    <DeleteIcon color="red.500" />
                  </Button>
                </Flex>
                <Flex
                  justify={isFullSize ? 'flex-end' : 'space-between'}
                  align="center"
                  width="100%"
                  gap={isFullSize ? 10 : 0}
                >
                  <VStack align="flex-start" spacing="1">
                    <Text color="gray" fontWeight="300" fontSize="sm">
                      Quantity
                    </Text>
                    <MobileSpinner
                      id={id}
                      defaultValue={cartQuantityMapping[id]}
                      setCartQuantityMapping={setCartQuantityMapping}
                    />
                  </VStack>
                  <Text marginTop="20px">{`$${(cartQuantityMapping[id] * price).toFixed(2)}`}</Text>
                </Flex>
              </VStack>
            </ListItem>
          ))}
        {!isFullSize && !!Number(total) && (
          <ListItem {...listItemStyle}>
            <PromoCode />
          </ListItem>
        )}
      </List>
    </DrawerBody>
  )
})
