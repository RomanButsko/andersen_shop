export let errorsProducts: string[] = []

export const productService = {
    async getProducts() {
        try {
            const response = await fetch(
                'https://fakestoreapi.com/products'
            ).then((res) => res.json())
            return response
        } catch (error: any) {
            if (errorsProducts.length) errorsProducts = []
            errorsProducts.push(error.message)
        }
    },
    async getExactProduct(productId: number) {
        try {
            const response = await fetch(
                `https://fakestoreapi.com/products/${productId}`
            ).then((res) => res.json())
            return response
        } catch (error: any) {
            if (errorsProducts.length) errorsProducts = []
            errorsProducts.push(error.message)
        }
    },
}
