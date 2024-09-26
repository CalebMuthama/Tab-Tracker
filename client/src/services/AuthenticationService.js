import Api from './Api'

export default {
  register(credentials) {
    return Api().post('/api/users', credentials)
  },
  login(credentials) {
    return Api().post('/api/users/login', credentials)
  }
}
