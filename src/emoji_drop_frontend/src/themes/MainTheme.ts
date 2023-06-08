import { Theme, createTheme } from "@mui/material";

const colors = {
    white: '#fff',
    main: '#aaa',
    light: '#ddd',
    dark: '#666'
},
    headers = {
        h1: "clamp(3.75rem, 4.25rem, 4rem)",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2rem",
        h5: "1.5rem",
        h6: "1rem",
    };

const mainTheme: Theme = createTheme({
    typography: {
        fontFamily: "'Nunito', sans-serif"
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    border: `2px solid ${colors.dark}`,
                    borderRadius: '1rem',
                    margin: '1rem 0 1rem 0'
                }
            }
        },
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
                    gap: '2rem',
                    marginBottom: '1.5rem'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '1.75rem', fontWeight: 'bold'
                }
            }
        },
        MuiSelect: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        fontFamily: "'Noto Color Emoji', sans-serif",
                        fontSize: '3rem',
                        height: '6rem',
                        padding: '1rem',
                        outline: 'none',
                        borderRadius: '1.5rem',
                        borderWidth: '5px',
                        borderStyle: 'solid',
                        borderColor: colors.dark,
                        boxShadow: `0 0.5rem 0 0 ${colors.dark}`,
                        '&:hover': {
                            borderWidth: `5px`,
                        },
                        '& fieldset': {
                            padding: '0',
                            border: 'none'
                        }
                    }
                }
            ]
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    display: 'flex',
                    flexDirection: 'row',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '2rem',
                    padding: '1rem',
                    fontFamily: "'Noto Color Emoji', sans-serif",
                    textAlign: 'center',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    width: '100%',
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        textTransform: 'capitalize',
                        margin: '0 auto',
                        fontWeight: 700,
                        color: colors.dark,
                        backgroundColor: colors.white,
                        borderColor: colors.dark,
                        borderStyle: 'solid',
                        outline: 'none',
                        '&:hover': {
                            borderColor: colors.dark,
                            borderStyle: 'solid',
                            backgroundColor: colors.light,
                            fontWeight: 900,
                        },
                        '&:disabled': {
                            color: colors.light,
                            borderColor: colors.light,
                            borderWidht: 'current',
                        }
                    }
                },
                {
                    props: { variant: 'outlined', size: 'small' },
                    style: {
                        width: 150,
                        borderRadius: '1.5rem',
                        fontSize: '1.25rem',
                        padding: '0.25rem 0.5rem',
                        boxShadow: `0 0.25rem 0 0 ${colors.dark}`,
                        borderWidth: `4px`,
                        '&:hover': {
                            borderWidth: `4px`,
                        },
                        '&:disabled': {
                            borderWidth: `4px`,
                        }
                    }
                },
                {
                    props: { variant: 'outlined', size: 'large' },
                    style: {
                        width: 100,
                        height: 100,
                        fontSize: '1.5rem',
                        borderRadius: '50%',
                        border: `5px solid ${colors.dark}`,
                        boxShadow: `0 0.5rem 0 0 ${colors.dark}`,
                        borderWidth: `5px`,
                        '&:hover': {
                            borderWidth: `5px`,
                        },
                        '&:disabled': {
                            borderWidth: `5px`,
                        }
                    }
                }
            ]
        }
    }
});

export default mainTheme;