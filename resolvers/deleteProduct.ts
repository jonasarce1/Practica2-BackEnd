import ProductModel from "../db/product.ts"

const deleteProduct = async (id:number) => {
    try{
        const product = await ProductModel.findOneAndDelete({id}).exec(); //Buscamos el producto y lo borramos
        if(!product){
            throw new Error("No se ha encontrado el producto");
        }
    }catch(error){
        console.log(error.message);
        return;
    }
}

export default deleteProduct;