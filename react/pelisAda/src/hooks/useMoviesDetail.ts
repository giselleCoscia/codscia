import { useEffect, useState } from 'react'
import type { Movie } from '@/types'

const useMovieDetail = (id: string | undefined) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return

      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams({
          api_key: import.meta.env.VITE_API_KEY,
          language: 'es-ES',
        })

        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/movie/${id}?${params}`
        )

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data: Movie = await response.json()
        setMovie(data)
      } catch (err) {
        setError('No se pudo cargar la película')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  return { movie, loading, error }
}

export default useMovieDetail
