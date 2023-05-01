import { toast } from "react-hot-toast";
import { useMutation, UseMutationOptions, useQuery, useQueryClient, UseQueryOptions } from "react-query";
import { craeteProduct, getAllCategories, getProductById, getProducts, getProductsByCategory } from "./request";
import { IproductResponse } from "./types";


export const useProducts = (options?: UseQueryOptions<Array<IproductResponse>, Error>) => {
    const { data, ...rest } = useQuery<Array<IproductResponse>, Error>(['products'], getProducts, { ...options })
    return { products: data, ...rest }
}

export const useProductsByCategory = (category: string, options?: UseQueryOptions<Array<IproductResponse>, Error>) => {
    const { data, ...rest } = useQuery<Array<IproductResponse>, Error>(['category', category], () => getProductsByCategory(category), { ...options })
    return { productsByCategory: data, ...rest }
}

export const useProductsById = (prodId: number, options?: UseQueryOptions<IproductResponse, Error>) => {
    const { data, ...rest } = useQuery<IproductResponse, Error>(['product', prodId], () => getProductById(prodId), { ...options })
    return { productById: data, ...rest }
}

export const useCategories = (options?: UseQueryOptions<Array<string>, Error>) => {
    const { data, ...rest } = useQuery<Array<string>, Error>(['categories'], getAllCategories, { ...options })
    return { categories: data, ...rest }
}

export const useCraeteProduct = (options?: UseMutationOptions<IproductResponse, Error>) => {

    const { mutate, ...rest } = useMutation(craeteProduct as any, {
        ...options
    })
    return { mutate, ...rest }
}