import { Menu, Package, Search, ShoppingBag, User } from "lucide-react";

const navLinks = ["New Arrival", "Men", "Women", "Sale"];

function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <Package size={20} strokeWidth={2.5} />
            </span>
                        <span className="text-xl font-black uppercase tracking-tighter">LITE.SHOP</span>
                    </a>

                    <nav className="hidden items-center gap-8 text-sm font-bold text-blue-100 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="relative transition-colors duration-200 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="mr-4 hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/30 px-3 py-1 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
              </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                        </div>

                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="h-10 w-48 rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 outline-none transition-all duration-300 placeholder:text-blue-200/50 focus:w-64 focus:bg-blue-500/50"
                            />
                            <Search size={16} strokeWidth={2.5} className="absolute left-3.5 top-3 text-blue-200" />
                        </div>

                        <button
                            type="button"
                            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
                            aria-label="Cart"
                        >
                            <ShoppingBag size={20} />
                        </button>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
                            aria-label="Account"
                        >
                            <User size={20} />
                        </button>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white md:hidden"
                            aria-label="Menu"
                        >
                            <Menu size={24} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;