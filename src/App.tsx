import Header from "./components/layout/Header";
import SidebarFilters from "./components/layout/SidebarFilters";

function App() {
    return (
        <>
            <Header />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <SidebarFilters />

                    <section className="lg:col-span-9">
                        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                            <h1 className="text-xl font-bold text-slate-900">
                                Recommended for you
                            </h1>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default App;