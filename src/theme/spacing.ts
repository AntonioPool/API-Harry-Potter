export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
} as const;

export const radius = {
    none: 0,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    full: 9999,
} as const;

export const typography = {
    hero: { fontSize: 56, lineHeight: 64 },
    h1: { fontSize: 40, lineHeight: 48 },
    h2: { fontSize: 32, lineHeight: 40 },
    h3: { fontSize: 24, lineHeight: 30 },
    h4: { fontSize: 20, lineHeight: 26 },
    body: { fontSize: 17, lineHeight: 26 },
    bodySmall: { fontSize: 14, lineHeight: 22 },
    caption: { fontSize: 12, lineHeight: 18 },
} as const;

export const fonts = {
    display: 'Cinzel-Bold',
    displayRegular: 'Cinzel-Regular',
    body: 'Inter-Regular',
    bodyBold: 'Inter-Bold',
} as const;
