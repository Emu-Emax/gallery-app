import {
  commonTypographyStyles,
  spacingProps,
} from 'components/_core/coreStyles'
import styled, { css } from 'styled-components'
import { ITypographyProps } from 'types/customStyles'

export const H1 = styled.h1<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 48px;
  `
)

export const H2 = styled.h2<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 30px;
    line-height: 52px;
  `
)

export const Body = styled.p<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 16px;
    line-height: 21px;
  `
)

export const Body2 = styled.p<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 13px;
    line-height: 18px;
  `
)

export const ErrorMessage = styled.p(
  ({ theme: { colors } }) => css`
    ${commonTypographyStyles};
    ${spacingProps};
    color: ${colors.error};
    font-size: 16px;
    text-align: left;
  `
)
