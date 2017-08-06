import authHttp from './http'

const debug = process.env.NODE_ENV !== 'production'

export default {
  isLogged: () => debug ? true : localStorage.token,
  login(username, password) {
    if (username && password) {
      return authHttp.post('/oauth/token?grant_type=password&username=' + username + '&password=' + password)
        .then(response => localStorage.token = response.data.access_token)
    }
    delete localStorage.token
    return Promise.reject()
  },
  logout: () => delete localStorage.token,
  token: () => localStorage.token
}
