import { useState } from 'react'

export function useFullCrud() {
  const [collection, setCollection] = useState([])

  function getCollection(url) {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setCollection(data))
  }

  function addItem(item) {
    const updatedCollection = [...collection, item]
    setCollection(updatedCollection)
  }

  function removeItem(id) {
    const updatedCollection = collection.filter(item => item.id !== id)
    setCollection(updatedCollection)
  }

  function updateItem(updatedItem) {
    const updatedCollection = collection.map(item => item.id === updatedItem.id ? updatedItem : item)
    setCollection(updatedCollection)
  }

  return [collection, getCollection, addItem, removeItem, updateItem]
}