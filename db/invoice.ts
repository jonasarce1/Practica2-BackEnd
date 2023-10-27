import mongoose from "npm:mongoose@7.6.3"; //Importamos el paquete de mongoose
//import {Product} from "../types.ts";
import {Invoice} from "../types.ts";

const Schema = mongoose.Schema; //Creamos un Schema de mongoose, esto es para crear un modelo de datos en la base de datos

const InvoiceSchema = new Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client"}, // Hace referencia al modelo de client
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product"}], // Hace referencia al modelo de product
    total: {type:Number, required:true} //el total es obligatorio
});


type InvoiceModelType = mongoose.Document & Omit<Invoice, "id"> //Creamos un tipo de dato que es un documento de mongoose y omitimos el id

export default mongoose.model<InvoiceModelType>("Invoice", InvoiceSchema); //Exportamos el modelo de datos de mongoose

//export default mongoose.model("Invoice", InvoiceSchema); //Exportamos el modelo de datos de mongoose  asi mas simple 