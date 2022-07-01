import DarkModeButton from "./darkModeButton";

export default function PresLayout({ children }) {

    return (
            <main className="bg-white dark:bg-gray-900 relative flex flex-col justify-center items-center min-h-screen min-w-screen overflow-hidden transition-colors">
                <DarkModeButton/>
                {children}
            </main>
    )
}