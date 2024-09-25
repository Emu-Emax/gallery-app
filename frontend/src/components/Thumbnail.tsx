import { API_URL_PUT_IMAGE } from 'api/gallery'
import axios from 'axios'
import styled, { css } from 'styled-components'

interface IGalleryImageProps {
  index: number
  src: string
  fetchImages: (arg?: boolean) => void
}

export const Image = styled.img(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 200px;
    height: 200px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  `
)

const Thumbnail = ({ index, src, fetchImages }: IGalleryImageProps) => {
  const handleImageClick = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/*'
    fileInput.onchange = event => {
      const file = (event.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = async () => {
          const base64String = reader.result as string
          try {
            const response = await axios.put(
              `${API_URL_PUT_IMAGE as string}/${index}/`,
              {
                image: base64String,
              }
            )

            // refetch images
            fetchImages(true)
          } catch (error) {
            console.error('Error updating image', error)
          }
        }
        reader.readAsDataURL(file)
      }
    }
    fileInput.click() // Simulate click to open file picker
  }

  return (
    <Image
      src={src}
      alt={`Image ${index}`}
      onClick={handleImageClick}
    />
  )
}

export default Thumbnail
