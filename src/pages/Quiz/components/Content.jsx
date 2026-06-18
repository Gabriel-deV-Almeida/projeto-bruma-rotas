export default function Content({ children }) {
    return (
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {children}
            </div>
        </main>
    );
}
