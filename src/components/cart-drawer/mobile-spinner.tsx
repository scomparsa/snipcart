import { memo, useCallback, useEffect } from 'react'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import type { SetCartQuantityMappingType } from '../../interface'

interface Props {
  id: number
  defaultValue: number
  setCartQuantityMapping: SetCartQuantityMappingType
}

export default memo<Props>(({ id, defaultValue, setCartQuantityMapping }) => {
  const { valueAsNumber, getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    defaultValue,
    step: 1,
    min: 0,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  useEffect(() => {
    setCartQuantityMapping((cartQuantityMapping) => {
      cartQuantityMapping[id] = valueAsNumber

      return { ...cartQuantityMapping }
    })
  }, [valueAsNumber, setCartQuantityMapping])

  return (
    <HStack maxW="200px">
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  )
})
