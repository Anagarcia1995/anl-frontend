import { useEffect, useState } from "react"

import { fetchReleases } from "../services/releaseService"

export default function useReleasesData() {
  const [releases, setReleases] = useState([])
  const [loading, setLoading] = useState(true)

  const loadReleases = async () => {
    try {
      const data = await fetchReleases()
      setReleases(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadReleases()
  }, [])

  return {
    releases,
    setReleases,
    loading,
    loadReleases,
  }
}