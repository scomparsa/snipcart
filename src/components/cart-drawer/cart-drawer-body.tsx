import { memo, useCallback, useContext } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button, DrawerBody, Flex, HStack, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import Context, { ContextType } from '../../context'
import MobileSpinner from './mobile-spinner'

export default memo(() => {
  const { goodsDatum, cartQuantityMapping, setCartQuantityMapping } = useContext(Context) as ContextType

  const handleCartQuantityClear = useCallback(
    (id: number) => {
      setCartQuantityMapping((cartQuantityMapping) => {
        cartQuantityMapping[id] = 0

        return { ...cartQuantityMapping }
      })
    },
    [setCartQuantityMapping]
  )

  return (
    <DrawerBody>
      <List>
        {goodsDatum
          .filter(({ id }) => !!cartQuantityMapping[id])
          .map(({ id, cover, name, price }) => (
            <ListItem marginLeft="-25px" marginRight="-25px" padding="35px" borderBottom="1px solid lightgray" key={id}>
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
      </List>
    </DrawerBody>
  )
})
