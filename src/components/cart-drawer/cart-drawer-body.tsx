import { memo, useCallback, useContext } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button, DrawerBody, Flex, HStack, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import Context, { ContextType } from '../../context'
import MobileSpinner from './mobile-spinner'
import PromoCode from './promo-code'

export default memo(() => {
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

  const listItemStyle = { margin: '0 -25px', padding: 35, borderBottom: '1px solid lightgray' }

  return (
    <DrawerBody>
      <List>
        {goodsDatum
          .filter(({ id }) => !!cartQuantityMapping[id])
          .map(({ id, cover, name, price }) => (
            <ListItem key={id} {...listItemStyle}>
              <VStack align="start" spacing={2}>
                <Flex justify="space-between" align="center" width="100%">
                  <HStack>
                    <Image alt="starry-night" htmlWidth="40px" objectFit="cover" src={cover} />
                    <strong>{name}</strong>
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
                <Text color="gray" fontWeight="300" fontSize="sm">
                  Quantity
                </Text>
                <Flex justify="space-between" align="center" width="100%">
                  <MobileSpinner
                    id={id}
                    defaultValue={cartQuantityMapping[id]}
                    setCartQuantityMapping={setCartQuantityMapping}
                  />
                  <Text>{`$${(cartQuantityMapping[id] * price).toFixed(2)}`}</Text>
                </Flex>
              </VStack>
            </ListItem>
          ))}
        {!!Number(total) && (
          <ListItem {...listItemStyle}>
            <PromoCode />
          </ListItem>
        )}
      </List>
    </DrawerBody>
  )
})
