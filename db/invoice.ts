import mongoose from "npm:mongoose@7.6.3";
import {Invoice} from "../types.ts";

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
        client: {type:String, required:true},
        products: {type:Array, required:true},
        total: {type:Number, required:false, default:0},
        id: {type:String, required:true, unique:true} // add unique index to id field
})

type InvoiceModelType = mongoose.Document & Omit<Invoice, "id">

// Set the schema's id field to use the default _id field generated by MongoDB
InvoiceSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
});

export default mongoose.model<InvoiceModelType>("Invoice", InvoiceSchema);
