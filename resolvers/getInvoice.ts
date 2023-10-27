import InvoiceModel from "../db/invoice.ts";

const getInvoice = async(id:number) => {
    if(!id){
        throw new Error("Faltan datos");
    }
    //mostrar los productos y el cliente visibles, no que se vea el id

    const invoice = await InvoiceModel.findOne({_id:id}).populate("products").populate("client").exec();
    
    if(!invoice){
        throw new Error("No existe esta factura");
    }

    return invoice;
}

export default getInvoice;