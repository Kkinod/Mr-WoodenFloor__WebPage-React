export interface ITheme {
    theme: typeof theme;
}

export const theme = {
    colors: {
        primary: '#c5a47e',
        primaryLight: 'rgb(226, 213, 197)',
        primaryDark: 'rgb(150, 123, 93)',
        primaryLightRgb: '226, 213, 197',
        secondary: '#b58b5b',
        secondaryRgb: '181, 139, 91',
        secondaryDarkRgb: '146, 112, 72',
        white: '#fff',
        whiteRgb: '255, 255, 255',
        redLight: '#c20f45',
        secondaryLight: '#ffb900',
        secondaryDark: '#ff7730',
        tertiaryLight: '#2998ff',
        tertiaryDark: '#5643fa',
        greyLight1: '#f7f7f7',
        greyLight2: '#eee',
        greyDark: '#777',
        greyDark2: '#999',
        greyDark3: '#333',
        black: '#000000',
        blackRgb: '0, 0, 0',
    },

    fontSize: {
        defaultFontSize: '1.6rem',
    },

    grid: {
        gridWidth: '114rem',
        gutterVertical: '8rem',
        // Gap between elements
        gutterHorizontal: '6rem',
    },

    size: {
        // 600px
        phone: '37.5em',
        // 900px
        tabPort: '56.25em',
        // 1200px
        tabLand: '75em',
        // 1800px
        bigDesktop: '112.5em',
    },
};

export const responsiveSize = {
    phone: `(max-width: ${theme.size.phone})`,
    tabPort: `(max-width: ${theme.size.tabPort})`,
    tabLand: `(max-width: ${theme.size.tabLand})`,
    bigDesktop: `(min-width: ${theme.size.bigDesktop})`,
};
