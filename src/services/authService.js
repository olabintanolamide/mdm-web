import Api from '../utils/api'

export const loginService = async ({ payload }) => {
  const { data } = await Api.post('/auth/login/', payload)
  return data?.data || data
}

export const getAuditService = async () => {
  const { data } = await Api.get('/audit-log/')
  return data?.data || data
}
