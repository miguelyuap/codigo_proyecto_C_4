const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    categoria:{type: String, required: true, max:150},
    precio:{type: Number, required: true, max:200},
})

module.exports = mongoose.model("productos", ProductosSchema);