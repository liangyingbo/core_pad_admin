 
function set(key, data, expire) {
  const cache = { data }
  if (expire) {
    const now = new Date().getTime()
    cache.expire = now + expire * 1000
  }
  console.log(key,cache)
  localStorage.setItem(key, JSON.stringify(cache))

}

function get(key) {
  const cacheStore = localStorage.getItem(key)
  if (cacheStore) {
    const cache = JSON.parse(cacheStore)
    if (cache?.expire) {
      if (cache.expire < new Date().getTime()) {
        localStorage.removeItem(key)
        return null
      }
      return cache.data
    }
    return cache.data
  }
  return null
}

function remove(key) {
  localStorage.removeItem(key)
}

export default { set, get, remove }