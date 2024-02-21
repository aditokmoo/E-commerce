const FormatUtils = {
    formatUrlProducts(category: string, adminUrl: string, productType: string) {
        console.log(category, adminUrl, productType)
        return category === 'computer' || category === 'smartphone' ? `/api/product?category=${category}` : adminUrl === '/admin/products' ? `/api/product` : `/api/product?type=${productType}&discount=50`
    },
    formatUrlProductSearch(text: string) {
        console.log(text)
        return `/api/product?search=${text}`
    }
}

export default FormatUtils;