import axios from "axios"

const notion = axios.create({
  baseURL:
    "https://sheets.googleapis.com/v4/spreadsheets/1gXC40fB4YRAo23cnK1dAK2tusJbzFnH2XmGX4pIzuNk/values/projects?alt=json&key=AIzaSyCRtYTA88KlEdNK14VS5ytc9wzWxfGoZCg",
})

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

export { medium, github, notion }
