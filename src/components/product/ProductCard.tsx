import type { Product } from "../../types/product";

type ProductCardProps = {
    product: Product;
};

function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            <div className="mt-4 space-y-2 px-1">
                <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
            {product.category}
          </span>

                    <span className="text-xs text-amber-500">
            {product.rating}
          </span>
                </div>

                <h3 className="text-sm font-bold">
                    {product.name}
                </h3>

                <p className="text-xs text-slate-500">
                    {product.stockText}
                </p>

                <div className="pt-2">
                    {product.oldPrice && (
                        <p className="text-xs text-slate-400 line-through">
                            {product.oldPrice}
                        </p>
                    )}

                    <div className="flex items-center justify-between">
            <span className="text-lg font-black">
              {product.price}
            </span>

                        <button
                            className={`rounded-xl px-4 py-2 text-xs font-bold ${
                                product.soldOut
                                    ? "cursor-not-allowed bg-slate-200 text-slate-500"
                                    : "bg-slate-900 text-white hover:bg-blue-600"
                            }`}
                        >
                            {product.soldOut ? "Notify Me" : "Add to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;