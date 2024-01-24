import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface Genre {
  id: number
  name: string
}

interface FetchGenresResponse {
  count: number
  results: Genre[]
}

const useGenres = () => {
  const [genres, setGeners] = useState<Genre[]>([])
  const [error, setError] = useState(null)
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsloading(true)
    apiClient
      .get<FetchGenresResponse>('/genres', {
        signal: controller.signal,
      })
      .then((res) => {
        setGeners(res.data.results)
        setIsloading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { genres, error, isloading }
}

export default useGenres
