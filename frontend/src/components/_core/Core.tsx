import { commonStylesFromProps } from 'components/_core/coreStyles'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

export const Div = styled.div<ICustomStyledProps>(
  () => css`
    ${commonStylesFromProps};
  `
)
