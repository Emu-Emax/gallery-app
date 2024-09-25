const COLORS_PALETTE = {
  black: '#000000',
  white: '#FFFFFF',
  grayTransparent: '#00000080',
  blackyGray: '#30303096',
  red: 'red',
}

export const SPACING_PX = 8

export const commonTheme = {
  spacing: (n: number) => `${n * SPACING_PX}px`,
}

export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: COLORS_PALETTE.black,
    secondary: COLORS_PALETTE.white,
    background: COLORS_PALETTE.white,
    error: COLORS_PALETTE.red,
    disabled: COLORS_PALETTE.blackyGray,
    text: COLORS_PALETTE.black,
    textSecondary: COLORS_PALETTE.grayTransparent,
  },
}
