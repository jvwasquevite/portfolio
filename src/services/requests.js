import { medium, github } from "./api"

export const getArticles = () => medium.get()
export const getProjects = () => github.get()
