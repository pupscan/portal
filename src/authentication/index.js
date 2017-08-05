import authHttp from './http'

const debug = process.env.NODE_ENV !== 'production'

export default {
  isLogged: () => debug ? true : true,
  login(username, password) {
    if (username && password) {
      return authHttp.post('/oauth/token?grant_type=password&username=' + username + '&password=' + password)
        .then(response => console.log(response))
    }
    return Promise.reject()
  },
  logout: () => http.defaults.headers.common.Authorization = ''
}
