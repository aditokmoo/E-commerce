import axios from '../http';

export async function getAllProducts(category: string, adminUrl: string, productType: string) {
	const url: string =
		category === 'computer' || category === 'smartphone' ? `/api/product?category=${category}` : adminUrl === '/admin/products' ? `/api/product` : `/api/product?type=${productType}`

	try {
		const response = await axios.get(url);
		const data = await response.data;
		console.log(data.products)
		return data.products;
	} catch (error) {
		console.log(error);
	}
}

export async function getSingleProduct(productId: string | undefined) {
	try {
		const response = await axios.get(`/api/product/${productId}`);
		const data = response.data;
		return data.product;
	} catch (error) {
		console.log(error);
	}
}
