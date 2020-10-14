import { request } from '../util/axios'

export function getPlanList() {
  return request({ url: '/plan', method: 'get' })
}

export function addPlan() {
  return request({ url: '/plan', method: 'post', data })
}

export function deletePlan() {
  return request({ url: '/plan', method: 'delete', params: { id } })
}