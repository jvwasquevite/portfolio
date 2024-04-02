import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { firestore } from "../services/firebase"

import { medium, github } from "./api"

/**
 * Internal docs queries with Firebase Cloud Firestore
 **/
export const getPortfolio = async () => {
  const portfolioCollection = query(
    collection(firestore, "portfolio"),
    orderBy("order")
  )

  const querySnapshot = await getDocs(portfolioCollection)

  const docsData = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }))

  return docsData
}

/**
 * External API requests from GitHub and Medium with Axios
 **/
export const getArticles = () => medium.get()
export const getProjects = () => github.get()
