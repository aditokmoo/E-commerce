import axios from "../http";

export async function getAllProducts() {
    try {
        const response = await axios.get('/api/product/');
        const data = await response.data;
        return data.products
    } catch (error) {
        console.log(error)
    }
}