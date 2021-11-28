const mongoose = require('mongoose');
const { Schema } = mongoose;

const esquema = new Schema(
    {
        nombres:{ type: String, required: true },
        apellidos:{ type: String, required: true },
        identificacion:{ type: String, required: true },
        direccion:{ type: String, required: true },
        celular:{ type: String, required: true },
        email:{ type: String, required: true },
        mascotas: [
            {
                namemascota:{ type: String, require: false},
                fechanacimiento:{ type: String, require: false},
                raza:{ type: String, require: false},
            }

        ]
        
});


module.exports = mongoose.model('Usuario', esquema);