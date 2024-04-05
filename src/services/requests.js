import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { firestore } from "../services/firebase"

import { medium, github } from "./api"

/**
 * Internal docs queries with Firebase Cloud Firestore
 **/
export const getPortfolio = async language => {
  const portfolioCollection = query(
    collection(firestore, "portfolio"),
    orderBy("sort")
  )

  const querySnapshot = await getDocs(portfolioCollection)

  const docsData =
    language === "pt"
      ? querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name[0],
          language: doc.data().language,
          topics: doc.data().topics,
          description: doc.data().ptDescription,
          screenshots: {
            desktop: doc.data().screenshots[0].downloadURL,
            mobile: doc.data().screenshots[1].downloadURL,
          },
          url: doc.data().url,
        }))
      : querySnapshot.docs.map(doc => ({
          id: doc.id,
          name:
            doc.data().name.length === 1
              ? doc.data().name[0]
              : doc.data().name[1],
          language: doc.data().language,
          topics: doc.data().topics,
          description: doc.data().enDescription,
          screenshots: {
            desktop: doc.data().screenshots[0].downloadURL,
            mobile: doc.data().screenshots[1].downloadURL,
          },
          url: doc.data().url,
        }))

  return docsData
}

/**
 * External API requests from GitHub and Medium with Axios
 **/
export const getArticles = () => medium.get()
export const getProjects = () => github.get()
