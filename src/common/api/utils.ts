import type {KeyParams} from './types'

export function getQueryKey<T extends KeyParams>(key: string, params?: T) {
  return [key, ...(params ? [params] : [])]
}

export function getAllUrlParams(url: string | null) {
  if (!url) {
    return null
  }

  const queryString = url.split('?')[1]
  const obj: {
    [key: string]: string
  } = {}

  if (queryString) {
    const [id] = queryString.split('#')
    const arr = id.split('&')

    for (let i = 0; i < arr.length; i++) {
      const a = arr[i].split('=')
      let paramName = a[0]
      let paramValue = typeof a[1] === 'undefined' ? 'true' : a[1]

      paramName = paramName.toLowerCase()
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase()

      if (!obj[paramName]) {
        obj[paramName] = paramValue
      }
    }
  }

  return obj
}

export const getPreviousPageParam = (page: string | null) => getAllUrlParams(page)?.page ?? null

export const getNextPageParam = (page: string | null) => getAllUrlParams(page)?.page ?? null
