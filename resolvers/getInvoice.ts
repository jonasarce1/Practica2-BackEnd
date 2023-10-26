import InvoiceModel from "../db/invoice.ts";

const getInvoice = async(id:number) => {
    if(!id){
        throw new Error("Faltan datos");
    }

    const invoice = await InvoiceModel.findById(id).exec();

    if(!invoice){
        throw new Error("No existe esa factura");
    }

    return invoice;
}

export default getInvoice;