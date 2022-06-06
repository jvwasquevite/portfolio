import API from './api'

export const getStats = () => API.get()
export const getGuestList = () => API.get('/guests')
export const getTinderList = query => API.get(`/tinder/users/${query}`)
export const getTinderUser = email => API.get(`/tinder/user/${email}`)
export const sendTinderLike = (from, to) =>
  API.post(`/tinder/like/${from}/${to}`)
