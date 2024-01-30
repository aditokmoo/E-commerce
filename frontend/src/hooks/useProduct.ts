import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getSingleProduct } from "../api/services/productServices";
import { useLocation, useParams } from "react-router";
import { useActiveCatalogFilterContext } from "../context/ActiveCatalogFilterContext";

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
        queryKey: ["product"],
        queryFn: () => getSingleProduct(productId)
    });

    return { data, isLoading }
}