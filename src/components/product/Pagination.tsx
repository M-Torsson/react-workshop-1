import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
    const pages = [1, 2, 3];

    return (
        <nav className="mt-8 flex items-center justify-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600">
                <ChevronLeft size={18} />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border font-medium ${
                        page === 1
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600"
                    }`}
                >
                    {page}
                </button>
            ))}

            <span className="px-2 text-sm text-slate-400">…</span>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600">
                12
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600">
                <ChevronRight size={18} />
            </button>
        </nav>
    );
}

export default Pagination;