import mongoose from "npm:mongoose@7.6.3"; //Importamos el paquete de mongoose
import {Product} from "../types.ts";

const Schema = mongoose.Schema; //Creamos un Schema de mongoose, esto es para crear un modelo de datos en la base de datos

const productSchema = new Schema({ //Schema del producto
    name: {type:String, required:true, unique:true}, //name unico para que no se repitan productos, es obligatorio
    stock: {type:Number, required:false, default:0}, //stock no es obligatorio y es 0 por defecto
    description: {type:String, required:false}, //la descripcion no es obligatoria
    price: {type:Number, required:true} //el precio si es obligatorio
})

type ProductModelType = mongoose.Document & Omit<Product, "id"> //Creamos un tipo de dato que es un documento de mongoose y omitimos el id

export default mongoose.model<ProductModelType>("Product", productSchema); //Exportamos el modelo de datos de mongoose, con export default podemos llamarlo como queramos al importarlo

//export default mongoose.model("Product", productSchema); //Exportamos el modelo de datos de mongoose, con export default podemos llamarlo como queramos al importarlo  asi mas simple