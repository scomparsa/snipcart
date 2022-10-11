import { memo, useState, useCallback } from 'react'
import { Button, Flex, InputGroup, Input, InputRightElement, Text } from '@chakra-ui/react'

interface Props {
  isFullSize?: boolean
}

export default memo<Props>(({ isFullSize }) => {
  const [active, setActive] = useState(false)

  const handleActive = useCallback(() => {
    setActive(true)
  }, [setActive])

  const handleCancel = useCallback(() => {
    setActive(false)
  }, [setActive])

  return active ? (
    <Flex justify="space-between" align="center" gap={2}>
      <InputGroup>
        <Input placeholder="Promo code" autoFocus />
        <InputRightElement width="4.5rem">
          <Button variant="link" colorScheme="blue">
            <Text as="u">Apply</Text>
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button variant="link" colorScheme="gray" onClick={handleCancel}>
        <Text as="u">Cancel</Text>
      </Button>
    </Flex>
  ) : (
    <Button variant="outline" bgColor="white" width={isFullSize ? '400px' : '100%'} onClick={handleActive}>
      Promo code?
    </Button>
  )
})
