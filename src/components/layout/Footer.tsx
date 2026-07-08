import { Globe, Mail, Package } from "lucide-react";

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white pb-10 pt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 space-y-6 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 font-bold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                <Package size={20} strokeWidth={2.5} />
              </span>
                            <span className="text-xl font-black uppercase tracking-tighter">
                LITE.SHOP
              </span>
                        </a>

                        <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-500">
                            Modern e-commerce experience built for speed and elegance.
                            Discover the latest trends in outerwear, footwear and accessories.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                                aria-label="Facebook"
                            >
                                <Globe size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                                aria-label="Github"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <FooterColumn
                        title="Shop"
                        links={["New Arrival", "Best Sellers", "Men Collection", "Women Collection"]}
                    />

                    <FooterColumn
                        title="Support"
                        links={["Order Status", "Shipping Policy", "Returns & Exchanges", "FAQs"]}
                    />

                    <FooterColumn
                        title="Company"
                        links={["About Us", "Sustainability", "Careers", "Contact"]}
                    />
                </div>

                <div className="mt-20 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        © 2026 LITE.SHOP. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-900"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-900"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type FooterColumnProps = {
    title: string;
    links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
    return (
        <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                {title}
            </h4>

            <ul className="space-y-4 text-sm font-bold text-slate-500">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className="transition-colors hover:text-blue-600">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;