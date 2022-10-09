import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

export default function MobileSpinner() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    min: 1,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW="200px">
      <Button {...dec}>-</Button>
      <Input {...input} readOnly />
      <Button {...inc}>+</Button>
    </HStack>
  )
}
