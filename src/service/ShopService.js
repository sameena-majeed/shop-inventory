
import '../data/shop-data.json';
export class ShopService {

    async getProductsSmall() {
        const res = await fetch('../data/shop-data.json');
        const d = await res.json();
        return d.data;
    }

    async getProducts() {
        const res = await fetch('../data/products.json');
        const d = await res.json();
        return d.data;
    }

    async getProductsWithOrdersSmall() {
        const res = await fetch('../data/products-orders-small.json');
        const d = await res.json();
        return d.data;
    }
}
     