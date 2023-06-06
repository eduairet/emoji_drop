import { Theme, createTheme } from "@mui/material"

const colors = {
    white: '#fff',
    main: '#aaa',
    light: '#ddd',
    dark: '#555'
},
    headers = {
        h1: "4rem",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2rem",
        h5: "1.5rem",
        h6: "1rem",
    }

const mainTheme: Theme = createTheme({
    typography: {
        fontFamily: "'Nunito', sans-serif"
    },
    components: {
        MuiTypography: {
            variants: Object.entries(headers).map(([variant, fontSize]: [string, string]): any => {
                return {
                    props: { variant },
                    style: { fontFamily: variant === 'h1' ? "Bungee Shade" : "Bungee", fontSize, color: colors.dark }
                }
            })

        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '2rem',
                    backgroundColor: colors.white,
                    borderRadius: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '2em'
                }
            }
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '1.5rem', fontWeight: 'bold'
                }
            }
        },
        MuiSelect: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: { fontSize: '3rem', height: '6rem', padding: '1rem' }
                }
            ]
        }
    }
});

export default mainTheme;