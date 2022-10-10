import { Dispatch, SetStateAction } from 'react'

export interface Goods {
  id: number
  name: string
  desc: string
  price: number
  cover: string
}

export type GoodsDatumType = Goods[]

export interface CartQuantityMapping {
  [key: string]: number
}

export type SetCartQuantityMappingType = Dispatch<SetStateAction<CartQuantityMapping>>
