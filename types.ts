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
    client: number, //Id de mongo
    products: Product[], //Array de productos
    total: number //Importe total de la factura
}