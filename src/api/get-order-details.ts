import { api } from '@/lib/axios'

export interface GetOrderDetailParams {
  orderId: string
}

export interface GetOrderDetailResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailParams) {
  const response = await api.get<GetOrderDetailResponse>(`/orders/${orderId}`)

  return response.data
}
