import axios from "axios"

const medium = axios.create({
  baseURL:
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jvwasquevite",
})

const github = axios.create({
  baseURL: "https://api.github.com/users/jvwasquevite/repos",
})

export { medium, github }
