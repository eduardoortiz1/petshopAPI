const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema(
    {
        nombres:{ type: String, required: true },
        apellidos:{ type: String, required: true },
        identificacion:{ type: String, required: true },
    }
);

module.exports = mongoose.model('Usuario', esquema);
