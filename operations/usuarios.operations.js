const coleccionUsuarios = require('../schemas/usuarios.schema');
const operaciones = {};

// Operación para consultar los usuarios.
operaciones.getUsuarios = async function(req, res) {
	try {
		const datos = await coleccionUsuarios.find()
	res.status(200).json(datos)
	}
	catch(err) {
		res.status(404).json({message: err.message})
	}
}

// Operación para consultar un usuario en especifico por su ID.
operaciones.getUsuario = async function(req, res) {
	try{
		const dato = await coleccionUsuarios.findById(req.params.id)
		if(dato==null) {
			res.status(404).json({message: "Not found"})
		}
		else {
			res.status(200).json(dato)
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

// Operación que crea un usuario.
operaciones.crearUsuario = async function(req, res) {
	const usuario = new coleccionUsuarios(req.body);
	console.log(usuario)
	await usuario.save();
	res.json({"status":"Dato de usuario guardado"});	
}

operaciones.actualizarUsuario = async function(req, res) {
	const { id } = req.params;
	const usuario = {
		nombres: req.body.nombres,
    	apellidos: req.body.apellidos,
		identificacion: req.body.identificacion,
    	direccion: req.body.direccion,
        celular: req.body.celular,
		email: req.body.email,
		mascotas: 
			{
				namemascota: req.body.namemascota,
                fechanacimiento:req.body.fechanacimiento,
                raza:req.body.raza
			}
	}
	console.log(usuario)
	await coleccionUsuarios.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
	res.json({"status":"Dato de usuario actualizado"});
}



operaciones.borrarUsuario = async function(req, res) {
	await coleccionUsuarios.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de usuario borrado"});	

}

module.exports = operaciones