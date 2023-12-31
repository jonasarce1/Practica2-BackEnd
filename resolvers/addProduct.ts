import ProductModel from "../db/product.ts"

const addProduct = async (name:string, stock:number, description:string, price:number) => {
    if(!name || !price || price < 0){
        throw new Error("Faltan datos");
    }

    const yaExiste = await ProductModel.findOne({name}).exec();

    if(yaExiste){
        throw new Error("Ya existe este producto");
    }

    const newProduct = new ProductModel({name, stock, description, price});
    await newProduct.save(); //Guardamos el producto en la base de datos
    return newProduct;
}

export default addProduct;