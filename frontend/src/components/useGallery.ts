import { API_URL_GET_PREVIEW } from 'api/gallery'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IFetchImagesResponse } from 'types/gallery'

export const useGallery = () => {
  const [imageCache, setImageCache] = useState<{ [page: number]: string[] }>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const imagesPerPage = 20

  const images = imageCache[currentPage] ?? []

  const fetchImages = async (refetch = false) => {
    setIsLoading(true)

    // If exist, use the cached images for the current page
    if (!refetch && imageCache[currentPage]) {
      setIsLoading(false)
      return
    }

    const newImages: string[] = []
    const startIndex = (currentPage - 1) * imagesPerPage
    const endIndex = currentPage * imagesPerPage

    const promises = []
    for (let i = startIndex; i < endIndex; i++) {
      promises.push(
        axios
          .get(`${API_URL_GET_PREVIEW as string}/${i}/`, {
            responseType: 'blob',
          })
          .then((response: IFetchImagesResponse) => {
            const url = URL.createObjectURL(response.data)
            newImages.push(url)
            return url
          })
          .catch(error => {
            console.error('Error fetching image', error)
          })
      )
    }

    await Promise.all(promises)

    setImageCache(prevCache => ({
      ...prevCache,
      [currentPage]: newImages,
    }))

    setIsLoading(false)
  }

  useEffect(() => {
    void fetchImages()
  }, [currentPage, imageCache])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return {
    images,
    currentPage,
    isLoading,
    handlePageChange,
    fetchImages,
  }
}
