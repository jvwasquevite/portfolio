import axios from "axios"

const medium = axios.create({
  baseURL: process.env.REACT_APP_MEDIUM_BASE_URL,
})

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASE_URL,
  auth: {
    username: process.env.REACT_APP_GITHUB_CLIENT_ID,
    password: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
  },
})

export { medium, github }
