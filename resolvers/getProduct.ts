import ProductModel from "../db/product.ts"

const getProduct = async() => {
    const products = await ProductModel.find({}).exec(); //Obtenemos todos los productos de la base de datos
    return products;
}

export default getProduct;