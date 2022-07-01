import DarkModeButton from "./darkModeButton";

export default function TOClayout({ children }) {
    
    return (
            <main className="relative pt-16 pb-32 flex content-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-colors">
                <DarkModeButton/>
                <div className="container max-w-screen-md">
                    {children}
                </div>
            </main>
    )
}