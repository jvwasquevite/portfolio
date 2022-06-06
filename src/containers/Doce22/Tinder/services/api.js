import axios from 'axios'

export default axios.create({
  baseURL: 'https://tinder.jvwasquevite.com',
  headers: { 'Access-Control-Allow-Origin': '*' },
})
