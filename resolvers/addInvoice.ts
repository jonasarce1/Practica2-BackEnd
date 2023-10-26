import InvoiceModel from "../db/invoice.ts";
import ClientModel from "../db/client.ts";
import {Product} from "../types.ts";

const addInvoice = async(client: string, products: Array<Product>, total: number) => {
    if(!client || !products || !total){
        throw new Error("Faltan datos");
    }

    //si no se encuentra el cliente por id
    const clienteAux = await ClientModel.findById(client).exec();
    if(!clienteAux){
        throw new Error("No existe ese cliente");
    }

    const yaExiste = await InvoiceModel.findOne({client}).exec();

    if(yaExiste){
        throw new Error("Ya existe esa factura");
    }

    const newInvoice = new InvoiceModel({client, products, total});

    await newInvoice.save(); //Esperamos a que se guarde la factura en la base de datos
    
    return newInvoice;
}

export default addInvoice;