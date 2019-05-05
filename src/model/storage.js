// 封装localStorage本地存储的方法

const storage = {
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  remvoe (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}

export default storage
