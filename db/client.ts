import mongoose from "npm:mongoose@7.6.3"; //Importamos el paquete de mongoose
import {Client} from "../types.ts";

const Schema = mongoose.Schema; //Creamos un Schema de mongoose, esto es para crear un modelo de datos en la base de datos

const clientSchema = new Schema({ //Schema del cliente
    name: {type:String, required:true}, //nombre obligatorio
    cif: {type:String, required:true, unique:true} //cif unico para que no se repitan clientes, es obligatorio
})

type ClientModelType = mongoose.Document & Omit<Client, "id"> //Creamos un tipo de dato que es un documento de mongoose y omitimos el id

export default mongoose.model<ClientModelType>("Client", clientSchema); //Exportamos el modelo de datos de mongoose

//export default mongoose.model("Client", clientSchema); //Exportamos el modelo de datos de mongoose asi mas simple 