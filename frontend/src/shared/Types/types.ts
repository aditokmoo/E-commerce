export interface createUserType {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
    country: string,
    city: string,
    postalCode: string
}

export interface loginUserType {
    email: string,
    password: string,
    remember_me?: boolean
}

export interface inputFieldDataTypes {
    type: string,
    id: string,
    name: string,
    label: string
}

// products && createProduct && useCreateProduct types
export interface createProductType {
    discount: number,
    images: string,
    name: string,
    discountPrice: number,
    originalPrice: number,
    price: number
    reviews: []
}