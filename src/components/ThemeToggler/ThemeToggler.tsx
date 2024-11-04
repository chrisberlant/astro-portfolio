import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Button from "../Button/Button";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (
            typeof localStorage !== "undefined" &&
            localStorage.getItem("theme")
        ) {
            return localStorage.getItem("theme");
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    // Update the document's class on theme change
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        if (theme) localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleToggleClick}
            className="absolute right-5 top-5 bg-card/80"
        >
            {theme === "dark" ? (
                <Moon className="size-5 transition-all" />
            ) : (
                <Sun className="size-5 transition-all" />
            )}
        </Button>
    );
}
