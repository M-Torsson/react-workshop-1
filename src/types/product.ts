export type Product = {
    id: number;
    name: string;
    category: string;
    image: string;
    price: string;
    oldPrice?: string;
    rating: number;
    badge: string;
    stockText: string;
    soldOut?: boolean;
};