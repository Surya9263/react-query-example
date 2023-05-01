import { request } from "../axios"
import { IproductResponse } from "./types"

export const getProducts = async (): Promise<Array<IproductResponse>> => {
    const { data } = await request({
        url: "/products",
        method: "GET"
    })
    return data
}

export const getProductsByCategory = async (category: string): Promise<Array<IproductResponse>> => {
    const { data } = await request({
        url: `/products/category/${category}`,
        method: "GET"
    })
    return data
}

export const getProductById = async (prodId: number): Promise<IproductResponse> => {
    const { data } = await request({
        url: `/products/${prodId}`,
        method: "GET"
    })
    return data
}

export const getAllCategories = async (): Promise<Array<string>> => {
    const { data } = await request({
        url: "/products/categories",
        method: "GET"
    })
    return data
}

export const craeteProduct = async (product: IproductResponse): Promise<IproductResponse> => {
    const { data } = await request({
        url: '/products',
        method: "POST",
        data: JSON.stringify(product)
    })
    return data
}