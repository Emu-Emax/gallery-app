import { commonStylesFromProps } from 'components/_core/coreStyles'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

const StyledButton = styled.button<ICustomStyledProps & { disabled?: boolean }>(
  ({ theme: { colors }, disabled }) => css`
    ${commonStylesFromProps};
    outline: none;
    border: 1px solid ${disabled ? colors.disabled : colors.primary};
    background: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 50px;
    min-width: 160px;
    transition: 0.25s;
    ${!disabled &&
    css`
      &:hover {
        background: ${colors.primary};
        color: ${colors.secondary};
      }
    `}
    font-size: 20px;
    line-height: 26px;
  `
)

interface IButtonProps extends ICustomStyledProps {
  type?: 'submit' | 'button' | 'reset'
  onClick?: () => void
  children: ReactNode
  className?: string
  disabled?: boolean
}

const Button = ({
  className = '',
  onClick,
  children,
  type,
  disabled = false,
  ...rest
}: IButtonProps) => (
  <StyledButton
    onClick={onClick}
    className={className}
    type={type}
    disabled={disabled}
    {...rest}
  >
    {children}
  </StyledButton>
)

export default Button
