import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import styled, { css } from 'styled-components'
import Pagination from './Pagination'
import Thumbnail from './Thumbnail'
import LoaderWrapper from './_wrappers/LoaderWrapper'
import { useGallery } from './useGallery'

export const GalleryWrapper = styled(Core.Div)(
  () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    min-height: 900px;
  `
)

const Gallery = () => {
  const { images, isLoading, handlePageChange, currentPage, fetchImages } =
    useGallery()

  return (
    <>
      <Core.Div
        w="100%"
        flex="column"
        alignItems="center"
        my={4}
      >
        <Typography.H1>Gallery app</Typography.H1>
        <Typography.Body>
          First fetch can take a while. Click on image to replace it. Enjoy ;)
        </Typography.Body>
      </Core.Div>
      <GalleryWrapper>
        <LoaderWrapper isLoading={isLoading}>
          {images.map((image, index) => (
            <Thumbnail
              index={index}
              src={image}
              fetchImages={fetchImages}
              key={image.substring(0, 3)}
            />
          ))}
        </LoaderWrapper>
      </GalleryWrapper>
      <Pagination
        handlePageChange={handlePageChange}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </>
  )
}

export default Gallery
