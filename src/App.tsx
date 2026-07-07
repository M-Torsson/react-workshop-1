import Header from "./components/layout/Header";

function App() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-100/30 px-4 py-6">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-xl font-bold text-slate-900">Recommended for you</h1>
                </div>
            </main>
        </>
    );
}

export default App;