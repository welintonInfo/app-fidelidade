import { AsyncStorage } from 'react-native'

export const getItem = async (name) => {
  const doc = await AsyncStorage.getItem(name)
  return doc
}

export const setItem = async (name, item) => {
  const doc = await AsyncStorage.setItem(name, item)
  return doc
}


export const removeItem = async (name) => {
  const doc = await AsyncStorage.removeItem(name)
  return doc
}