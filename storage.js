class InMemoryStorage {
  storage = {}
  get(key) {
    return storage[key]
  }

  set(key, value) {
    storage[key] = value
  }
}


export default InMemoryStorage
