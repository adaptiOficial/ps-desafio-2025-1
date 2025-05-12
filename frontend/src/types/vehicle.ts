import { categoryType } from './category'

export type vehicleType = {
  id: string
  name: string
  brand: string
  manufacture_year: number
  image: string
  price: number
  remaining_units: number
  category_id: string
  category: categoryType
  created_at: Date
  updated_at: Date
}
