import { useEffect, useState } from "react";

export default function useThemeSelector() {

    const [theme, setTheme] = useState<string>("")

    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (darkTheme) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        const html = document.querySelector('html')
        html?.setAttribute("theme", theme)
    }, [theme])

    const handleThemeSelection = () => {
        if (theme === 'light') setTheme('dark')
        if (theme === 'dark') setTheme('light')
    }

    return {
        theme,
        handleThemeSelection
    }

}