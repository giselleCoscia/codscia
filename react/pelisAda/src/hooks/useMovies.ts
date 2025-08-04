import type { ApiResponse, Movie, MovieDetail, PaginatedApiResponse, Video } from '@/types'
import { useEffect, useState, useCallback } from 'react'

interface UseApiDataReturn<T> {
  data: T[]
  loading: boolean
  error: string | null
  page: number
  totalPages: number
  totalResults: number
  setPage: (page: number) => void
}

const useMovies = <T = any> (endpoint: string, name: string = ''): UseApiDataReturn<T> => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalResults, setTotalResults] = useState<number>(0)

  const languaje = 'es-ES'
  const region = 'AR'

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        api_key: import.meta.env.VITE_API_KEY,
        languaje,
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

      const result: ApiResponse<T> = await response.json()

      if (Array.isArray(result)) {
        setData(result)
        setTotalPages(1)
        setTotalResults(result.length)
      } else if (result && typeof result === 'object' && 'results' in result) {
        const paginatedResult = result as PaginatedApiResponse<T>
        setData(paginatedResult.results || [])
        setTotalPages(paginatedResult.total_pages || 1)
        setTotalResults(paginatedResult.total_results || 0)
      } else {
        setData([result as T])
        setTotalPages(1)
        setTotalResults(1)
      }
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

const useTrailer = (id:string) =>{
  const { data, loading, error } = useMovies<Video>(`/movie/${id}/videos`)
  return { trailer:data[0],loading,error}
}


const useMovie = (id:string) =>{
  const { data, loading, error } = useMovies<MovieDetail>(`/movie/${id}`)
  return { movie:data[0],loading,error}
}

export { useTrailer,useMovie }

export default useMovies
export type { Movie,  UseApiDataReturn}
