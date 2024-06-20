import { id } from '../constant/formField.constant'
import {
  BOOLEAN,
  EMPTY_COUNT,
  OBJECT,
  STRING,
} from '../constant/index.constant'

export const equal = (obj1, obj2) => obj1 === obj2

export const head = obj => obj?.[0]

export const last = obj => obj?.[length(obj) - 1]

export const length = obj => obj?.length

export const values = object => (object ? Object.values(object) : [])

export const keys = object => (object ? Object.keys(object) : [])

export const isEmpty = value => {
  if (typeOf(value, STRING) && isEmptyString(value)) return true
  if (typeOf(value, OBJECT) && lte(length(keys(value)))) return true
  if (!value) return true
  return false
}

export const isNull = value => equal(value, null)

export const isUndefined = value => equal(value, undefined)

export const isEmptyString = value =>
  equal(value, '') || checkUndefined(value) || equal(value, null)

export const lowerCase = value => value?.toLowerCase()

export const isArray = obj => Array.isArray(obj)

export const checkUndefined = obj => equal(obj, undefined)

export const isBool = value => typeOf(value, BOOLEAN)

export const checkIncludes = (value, array) => array.includes(value)

export const typeOf = (val, type) => equal(typeof val, type)

export const gt = (param1, param2 = 0) => param1 > param2

export const lt = (param1, param2 = 0) => param1 < param2

export const gte = (param1, param2 = 0) => param1 >= param2

export const lte = (param1, param2 = 0) => param1 <= param2

export const upperCase = value => value?.toUpperCase()

export const indexOf = (string, val) => string?.indexOf(val)

export const areEqualProps = (prev, next) =>
  equal(JSON.stringify(prev), JSON.stringify(next))

export const capitalizeString = val =>
  upperCase(val?.charAt(0)) + lowerCase(val?.slice(1))

export const env = key => process.env[key]

export const next = value => +value + 1

export const removeUniqueArray = (arr, type = id) => {
  const uniqueIds = []
  const unique = arr.filter(element => {
    const isDuplicate = checkIncludes(element[type], uniqueIds)
    if (!isDuplicate) {
      uniqueIds.push(element[type])
      return true
    }
    return false
  })
  return unique
}

export const newArray = (length = EMPTY_COUNT) => Array.from({ length })

export const entries = value => (value ? Object.entries(value) : null)
