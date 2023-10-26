import express, {Request, Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import addProduct from "./resolvers/addProduct.ts";
import getProduct from "./resolvers/getProduct.ts";
import deleteProduct from "./resolvers/deleteProduct.ts";
import addClient from "./resolvers/addClient.ts";
import getClient from "./resolvers/getClient.ts";
import deleteClient from "./resolvers/deleteClient.ts";
import addInvoice from "./resolvers/addInvoice.ts";
import getInvoice from "./resolvers/getInvoice.ts";

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

app.post("/products", async (req:Request, res:Response) => { //Ruta para crear productos
    try{
        const {name, stock, description, price} = req.body;
        const newProduct = await addProduct(name, stock, description, price);
        res.json(newProduct);
    }catch(error){
        res.json({error:error.message});
    }
})

app.get("/products", async (_req:Request, res:Response) => { //Ruta para obtener todos los productos
    try{
        const products = await getProduct();
        res.json(products);
    }catch(error){
        res.json({error:error.message});
    }
})

app.delete("/products/:id", async (req:Request, res:Response) => { //Ruta para eliminar un producto
    try{
        const id = req.params.id;
        await deleteProduct(id); //Borramos segun el id que asigna Mongo automaticamente
        res.json({message:"Producto eliminado correctamente"});
    }catch(error){
        res.json({error:error.message});
    }
})

app.post("/client", async (req:Request, res:Response) => { //Ruta para crear clientes
    try{
        const {name, cif} = req.body;
        const newClient = await addClient(name, cif);
        res.json(newClient);
    }catch(error){
        res.json({error:error.message});
    }
})

app.get("/client", async (_req:Request, res:Response) => { //Ruta para obtener todos los clientes
    try{
        const clients = await getClient();
        res.json(clients);
    }catch(error){
        res.json({error:error.message});
    }
})

app.delete("/client/:id", async(req:Request, res:Response) => {
    try{
        const id = req.params.id;
        await deleteClient(id); //Borramos segun el id que asigna Mongo automaticamente
        res.json({message:"Cliente eliminado correctamente"});
    }catch(error){
        res.json({error:error.message});
    }
})

app.post("/invoice", async (req:Request, res:Response) => { //Ruta para crear facturas")
    try{
        const {client, products, total} = req.body;
        const newInvoice = await addInvoice(client, products, total);
        res.json(newInvoice);
    }catch(error){
        res.json({error:error.message});
    }
})

app.get("/invoice/:id", async (req:Request, res:Response) => { //Ruta para obtener todas las facturas
    try{
        const id = req.params.id;
        const invoice = await getInvoice(id);
        res.json(invoice);
    }catch(error){
        res.json({error:error.message});
    }
})

app.listen(3000, () => { console.log("Servidor funcionando en puerto 3000"); });
