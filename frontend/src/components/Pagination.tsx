import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import styled, { css } from 'styled-components'
import Button from './_common/Button'

interface IPaginationProps {
  handlePageChange: (arg: number) => void
  currentPage: number
  isLoading: boolean
}

export const PaginationWrapper = styled(Core.Div)(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
  `
)

const Pagination = ({
  handlePageChange,
  currentPage,
  isLoading,
}: IPaginationProps) => {
  return (
    <PaginationWrapper mt={8}>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
      >
        Previous
      </Button>
      <Typography.H2>{currentPage}</Typography.H2>

      <Button
        disabled={isLoading}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </PaginationWrapper>
  )
}

export default Pagination
