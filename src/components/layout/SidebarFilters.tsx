const categories = [
    { name: "All Products", count: 124, checked: true },
    { name: "Outerwear", count: 42 },
    { name: "Footwear", count: 18 },
    { name: "Accessories", count: 64 },
];

function SidebarFilters() {
    return (
        <aside className="self-start lg:sticky lg:top-20 lg:col-span-3">
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
                <section className="space-y-4">
                    <h2 className="text-sm font-bold text-slate-900">Categories</h2>

                    <div className="space-y-3">
                        {categories.map((category) => (
                            <label key={category.name} className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    defaultChecked={category.checked}
                                    className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] accent-blue-600"
                                />
                                <span className="flex-1 text-sm font-medium text-slate-700">
                  {category.name}{" "}
                                    <span className="font-normal text-slate-400">({category.count})</span>
                </span>
                            </label>
                        ))}
                    </div>
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                <section className="space-y-3">
                    <h2 className="text-sm font-bold text-slate-900">Price Range</h2>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>0 kr</span>
                        <span>1800 kr</span>
                    </div>
                    <input type="range" min="0" max="1800" defaultValue="900" className="w-full accent-blue-500" />
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                <section className="space-y-4">
                    <h2 className="text-sm font-bold text-slate-900">Availability</h2>

                    <div className="space-y-3">
                        {["In Stock", "On Sale"].map((item) => (
                            <label key={item} className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] accent-blue-600"
                                />
                                <span className="flex-1 text-sm text-slate-700">{item}</span>
                            </label>
                        ))}
                    </div>
                </section>

                <section className="mt-6">
                    <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-amber-500 p-6 text-white">
                        <h3 className="text-lg font-bold">Summer Sale</h3>
                        <p className="mt-2 text-sm leading-relaxed opacity-90">
                            Get up to 50% off on all summer collections. Limited time offer!
                        </p>
                        <button className="mt-6 w-full rounded-[0.75rem] bg-white px-5 py-2.5 font-semibold text-blue-600 shadow-lg transition-all hover:bg-slate-50">
                            Shop Now
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    );
}

export default SidebarFilters;