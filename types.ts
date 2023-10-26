export type Product = {
    name: string,
    stock: number,
    description: string,
    price: number
}

export type Client = {
    name: string,
    cif: string
}

export type Invoice = {
    client: string, //Id de mongo
    products: Array<string>, //Array de ids de mongo
    total: number //Importe total de la factura
}