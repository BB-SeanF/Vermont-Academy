export default function TOCsectionHeader({children}) {
    return (
        <div className="block border-b border-gray-900  text-center uppercase font-black tracking-[.5em]  text-xs pb-2 leading-none mb-10 text-gray-800 dark:text-gray-400 dark:border-gray-700">
            <h2>{children}</h2>
        </div>
    )
}