import { createProductType } from '../../shared/Types/types';
import FormatUtils from '../../utils/formatUtils';
import axios from '../http';

export async function getAllProducts(category: string, sortBy: string, adminUrl: string, productType: string) {
	try {
		const url = FormatUtils.formatUrlProducts(category, sortBy, adminUrl, productType)
		const response = await axios.get(url);
		const data = await response.data;
		return data.products;
	} catch (error) {
		console.log(error);
	}
}

export async function getSearchedProducts(text: string) {
	try {
		const url = FormatUtils.formatUrlProductSearch(text);
		const response = await axios.get(url);
		const data = await response.data;
		return data.products;
	} catch (error) {
		console.log(error)
	}
}

export async function getSingleProduct(productId: string | undefined) {
	try {
		const response = await axios.get(`/api/product/${productId}`);
		const data = response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function createProduct(productData: createProductType) {
	try {
		const response = await axios.post('/api/product', productData);
		const data = await response.data;
		return data.product
	} catch (error) {
		console.log(error)
	}
}