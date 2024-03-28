import axios from "axios"

export default axios.create({
  baseURL:
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jvwasquevite",
})
