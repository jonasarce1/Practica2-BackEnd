import ClientModel from "../db/client.ts";

const addClient = async(name:string, cif:string) => {
    if(!name || !cif){
        throw new Error("Faltan datos");
    }

    const yaExiste = await ClientModel.findOne({cif:cif}).exec();

    if(yaExiste){
        throw new Error("Ya existe ese cliente");
    }

    const newClient = new ClientModel({name, cif});
    await newClient.save(); //Esperamos a que se guarde el cliente en la base de datos
    return newClient;
}

export default addClient;