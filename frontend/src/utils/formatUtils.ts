const FormatUtils = {
    formatUrlProducts(category: string, sortBy: string, adminUrl: string, productType: string) {
        return category === 'computer' || category === 'smartphone' ? `/api/product?category=${category}&sortBy=${sortBy}` : adminUrl === '/admin/products' ? `/api/product` : `/api/product?type=${productType}&discount=50`
    },
    formatUrlProductSearch(text: string) {
        console.log(text)
        return `/api/product?search=${text}`
    }
}

export default FormatUtils;