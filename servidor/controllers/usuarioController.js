const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        nombreUsuario = new Usuario(req.body);
        
        await nombreUsuario.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerUsuario = async (req,res) => {

    try {
        const nombreUsuario = await Usuario.find();
        res.json(nombreUsuario)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuario = async (req,res) => {
    try {
        const  { nombre, correo, empresa, rol, privilegios  } = req.body;
        let nombreUsuario = await Usuario.findById(req.params.id);

        if(!nombreUsuario){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        nombreUsuario.nombre = nombre;
        nombreUsuario.rol = rol;
        nombreUsuario.privilegios = privilegios;
        nombreUsuario.correo = correo;
        nombreUsuario.empresa = empresa;


        nombreUsuario  = await Usuario.findByIdAndUpdate({_id: req.params.id}, nombreUsuario, { new: true})
        res.json(nombreUsuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerUsuarioID = async (req,res) => {

    try {
        let nombreUsuario  = await Usuario.findById(req.params.id);

        if(!nombreUsuario ){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        
        res.json(nombreUsuario );

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req,res) => {

   
}