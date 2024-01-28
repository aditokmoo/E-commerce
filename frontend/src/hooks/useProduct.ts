import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/services/productServices";

export function useGetAllProducts() {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts
    });

    return { data, isLoading }
}