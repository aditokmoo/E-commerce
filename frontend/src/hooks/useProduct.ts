import { InvalidateQueryFilters, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getAllProducts, getSingleProduct } from "../api/services/productServices";
import { useLocation, useParams } from "react-router";
import { useActiveCatalogFilterContext } from "../context/ActiveCatalogFilterContext";
import { createProductType } from "../shared/Types/types";

export function useGetAllProducts() {
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const admin = location.pathname;
    const { activeProduct } = useActiveCatalogFilterContext();

    const { data, isLoading } = useQuery({
        queryKey: ["products", category, admin, activeProduct],
        queryFn: () => getAllProducts(category, admin, activeProduct)
    });

    return { data, isLoading }
}

export function useGetSingleProduct() {
    const { productId } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getSingleProduct(productId)
    });

    return { data, isLoading }
}

export function useCreateProduct() {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (productData: createProductType) => createProduct(productData),
        mutationKey: ["new_product"],
        onSuccess: () => {
            queryClient.invalidateQueries("products" as InvalidateQueryFilters)
        }
    });

    return { mutate, isPending }
}