import InvoiceModel from "../db/invoice.ts";
import {Product} from "../types.ts";

const addInvoice = async(client: string, products: Array<Product>, total: number) => {
    if(!client || !products || !total){
        throw new Error("Faltan datos");
    }
    const newInvoice = new InvoiceModel({client, products, total});
    await newInvoice.save(); //Esperamos a que se guarde la factura en la base de datos
    return newInvoice;
}

export default addInvoice;