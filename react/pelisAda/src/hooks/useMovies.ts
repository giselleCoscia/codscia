import type { ApiResponse, Movie } from '@/types'
import { useEffect, useState, useCallback } from 'react'

interface UseMoviesReturn {
  data: Movie[]
  loading: boolean
  error: string | null
  page: number
  totalPages: number
  totalResults: number
  setPage: (page: number) => void
}

const useMovies = (endpoint: string, name: string = ''): UseMoviesReturn => {
  const [data, setData] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalResults, setTotalResults] = useState<number>(0)

  const language = 'es-ES'
  const region = 'AR'

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        api_key: import.meta.env.VITE_API_KEY,
        language,
        region,
        page: page.toString(),
        query: name,
      })

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${endpoint}?${params}`
      )

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const result: ApiResponse = await response.json()

      setData(result.results)
      setTotalPages(result.total_pages)
      setTotalResults(result.total_results)
    } catch (err) {
      console.error('Error fetching movies:', err)
    } finally {
      setLoading(false)
    }
  }, [endpoint, page, name])

  const handleSetPage = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPage(newPage)
      }
    },
    [totalPages]
  )

  useEffect(() => {
    fetchData()
  }, [endpoint, page, name])

  return {
    data,
    loading,
    error,
    page,
    totalPages,
    totalResults,
    setPage: handleSetPage,
  }
}

export default useMovies
export type { Movie, UseMoviesReturn }
