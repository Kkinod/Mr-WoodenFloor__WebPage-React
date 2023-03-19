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
        gutterVerticalSmall: '6rem',
        // Gap between elements
        gutterHorizontal: '6rem',
    },

    // 0 - 400px:      Small Phone
    // 0 - 600px:      Phone
    // 600 - 900px:    Tablet
    // 900 - 1200px:   Tablet landscape
    // [1200 - 1800]   --Normal styles
    // 1800px + :      Big desktop

    size: {
        // 400px
        phoneSmall: '25em',
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
