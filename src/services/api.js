import axios from 'axios'

export default axios.create({
  baseURL:
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jvwasquevite',
})
