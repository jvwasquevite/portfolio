import { medium, github, notion } from "./api"

export const getArticles = () => medium.get()
export const getProjects = () => github.get()
export const getPortfolio = () => notion.get()
