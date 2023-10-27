import InvoiceModel from "../db/invoice.ts";

const getInvoice = async (id: number) => {
    if (!id) {
        throw new Error("Faltan datos");
    }

    const invoice = await InvoiceModel.findById(id) .populate('client').populate('products').exec(); 
    //Buscamos la factura por id y con populate hacemos que nos devuelva el cliente y los productos como objetos
    //Asi, al hacer el get veremos los objetos y no solo los ids

    if (!invoice) {
        throw new Error("No existe esta factura");
    }

    return invoice;
}

export default getInvoice;