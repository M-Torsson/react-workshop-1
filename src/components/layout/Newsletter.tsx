function Newsletter() {
    return (
        <section className="relative mt-12 overflow-hidden bg-slate-900 py-16 text-white">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 text-center lg:flex-row lg:text-left">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-black uppercase italic">
                        Join the LITE.CLUB
                    </h2>

                    <p className="mt-4 text-slate-300">
                        Subscribe to our newsletter and get
                        <span className="font-bold text-white"> 15% off </span>
                        your first order.
                    </p>
                </div>

                <form className="w-full max-w-md">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
                        />

                        <button
                            type="submit"
                            className="rounded-xl bg-blue-600 px-8 py-4 font-bold uppercase tracking-wider transition hover:bg-blue-500"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;