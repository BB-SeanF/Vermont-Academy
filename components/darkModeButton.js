import SvgDarkMode from "../assets/icons/DarkMode"
import SvgLightMode from "../assets/icons/LightMode"

import useDarkMode from "../hooks/useDarkKMode"

export default function DarkModeButton() {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <div className="absolute z-50 top-5 right-5">
            {colorTheme === "light" ? (
                <button
                    className="h-10 w-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                    onClick={() => setTheme("light")}
                >
                    <SvgLightMode/>
                </button>
            ) : (
                <button
                className="h-10 w-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                onClick={() => setTheme("dark")}
                >
                    <SvgDarkMode/>
                </button>
            )}

        </div>
    )
}

