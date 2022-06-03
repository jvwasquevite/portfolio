import axios from 'axios'

export default axios.create({
  baseURL: 'http://ec2-3-85-129-252.compute-1.amazonaws.com:8000/',
  headers: { 'Access-Control-Allow-Origin': '*' },
})
