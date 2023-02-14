/* Сюда можно добавить какие-либо ошибки и посмотреть результат, с сервера они просто не приходят */
export const errorsProducts: string[] = []

export const ProductService = {
    async getProducts() {
        try {
            const response = await fetch(
                'https://api.escuelajs.co/api/v1/products'
            )
            return response.json()
        } catch (error: any) {
            errorsProducts.push(error.message)
        }
    },
    async getExactProduct(productId: number) {
        try {
            const response = await fetch(
                `https://api.escuelajs.co/api/v1/products/${productId}`
            )
            return response.json()
        } catch (error: any) {
            errorsProducts.push(error.message)
        }
    },
}
