import ClientModel from "../db/client.ts";

const getClient = async() => {
    const clients = ClientModel.find({}).exec(); //Obtenemos todos los clientes
    return clients;
}

export default getClient;