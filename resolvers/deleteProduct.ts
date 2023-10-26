import ProductModel from "../db/product.ts"

const deleteProduct = async (id:number) => {
    const product = await ProductModel.findByIdAndDelete(id).exec(); //Buscamos el producto por id y lo eliminamos
    if(!product){
        throw new Error("No se ha encontrado el producto");
    }
}

export default deleteProduct;