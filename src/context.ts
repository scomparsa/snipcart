import { createContext } from 'react'
import type { GoodsDatumType, CartQuantityMapping, SetCartQuantityMappingType, SetDrawerSizeType } from './interface'

export type ContextType = {
  goodsDatum: GoodsDatumType
  total: string
  cartQuantityMapping: CartQuantityMapping
  setCartQuantityMapping: SetCartQuantityMappingType
  setDrawerSize: SetDrawerSizeType
}

export default createContext<ContextType | null>(null)
