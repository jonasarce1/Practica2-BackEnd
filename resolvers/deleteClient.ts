import ClientModel from "../db/client.ts";

const deleteClient = async(id:number) => {
    const client = await ClientModel.findByIdAndDelete(id).exec();
    if(!client){
        throw new Error("No se encontro el cliente");
    }
}

export default deleteClient;