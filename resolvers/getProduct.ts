import ProductModel from "../db/product.ts"

const getProduct = async() => {
    try{
        const products = await ProductModel.find().exec(); //Obtenemos todos los productos de la base de datos
        return products;
    }catch(error){
        console.log(error.message);
        return;
    }
}

export default getProduct;