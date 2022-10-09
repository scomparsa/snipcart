import { DeleteIcon } from '@chakra-ui/icons'
import { Button, DrawerBody, Flex, HStack, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import starryNightImgUrl from 'assets/starry-night.jpg'
import MobileSpinner from '../mobile-spinner'

export default function CartDrawerBody() {
  return (
    <DrawerBody>
      <List>
        <ListItem marginLeft="-25px" marginRight="-25px" padding="35px" borderBottom="1px solid lightgray">
          <VStack align="start" spacing="2">
            <Flex justify="space-between" align="center" width="100%">
              <HStack>
                <Image alt="starry-night" htmlWidth="40px" objectFit="cover" src={starryNightImgUrl} />
                <strong>Starry Night</strong>
              </HStack>
              <Button borderRadius="50%" width="40px" bgColor="red.100">
                <DeleteIcon color="red.500" />
              </Button>
            </Flex>
            <Text color="gray" fontWeight="300" fontSize="sm">
              Quantity
            </Text>
            <Flex justify="space-between" align="center" width="100%">
              <MobileSpinner />
              <Text>$239.50</Text>
            </Flex>
          </VStack>
        </ListItem>
      </List>
    </DrawerBody>
  )
}
