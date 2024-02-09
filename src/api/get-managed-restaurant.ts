import { api } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  id: string
  name: string
  description: string | null
  managerId: string | null
  createAt: Date | null
  updateAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
