"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="fixed top-1/2 right-6 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg opacity-50 cursor-wait">
                <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="fixed top-1/2 right-6 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] text-orange-400 transition-all" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
