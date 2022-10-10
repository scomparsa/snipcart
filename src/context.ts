import { createContext } from 'react'
import type { GoodsDatumType, CartQuantityMapping, SetCartQuantityMappingType } from './interface'

export type ContextType = {
  goodsDatum: GoodsDatumType
  total: string
  cartQuantityMapping: CartQuantityMapping
  setCartQuantityMapping: SetCartQuantityMappingType
}

export default createContext<ContextType | null>(null)
