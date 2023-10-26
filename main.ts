import express, {Request, Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import addProduct from "./resolvers/addProduct.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); //Obtenemos la variable de entorno MONGO_URL ya sea de .env o de las variables de entorno del sistema

if(!MONGO_URL){
    console.log("No se ha encontrado la variable de entorno MONGO_URL");
    Deno.exit(1);
}

await mongoose.connect(MONGO_URL);

const app = express();

app.use(express.json());

app.get("/products", async (req:Request, res:Response) => { //Ruta para crear productos
    try{
        const {name, stock, description, price} = req.body;
        const newProduct = await addProduct(name, stock, description, price);
        res.json(newProduct);
    }catch(error){
        res.json({error:error.message});
    }
})