import mongoose from "npm:mongoose@7.6.3"; //Importamos el paquete de mongoose
import {Product} from "../types.ts";
import {Invoice} from "../types.ts";

const Schema = mongoose.Schema; //Creamos un Schema de mongoose, esto es para crear un modelo de datos en la base de datos

const InvoiceSchema = new Schema({ //Schema de la factura
    client: {type:String, required:true}, //id del cliente (el automatico de mongo), obligatorio y unico,
    products: {type:Array<Product>, required:true}, //array de productos, obligatorio
    total: {type:Number, required:false, default:0}, //total de la factura, no es obligatorio y es 0 por defecto
})

type InvoiceModelType = mongoose.Document & Omit<Invoice, "id"> //Creamos un tipo de dato que es un documento de mongoose y omitimos el id

export default mongoose.model<InvoiceModelType>("Invoice", InvoiceSchema); //Exportamos el modelo de datos de mongoose