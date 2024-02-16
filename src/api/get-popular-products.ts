/* eslint-disable prettier/prettier */
import { api } from '@/lib/axios'

export type GetPopularProductResponse = {
  product: number
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
