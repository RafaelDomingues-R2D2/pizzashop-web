import { api } from '@/lib/axios'

export interface GetDailyRevenueInPreiodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPreiodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPreiodQuery) {
  const response = await api.get<GetDailyRevenueInPreiodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
