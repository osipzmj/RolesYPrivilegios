const Roles = require("../models/Roles");

exports.crearRol = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        roles = new Roles(req.body);
        
        await roles.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRoles = async (req,res) => {

    try {
        const roles = await Roles.find();
        res.json(roles)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarRol = async (req,res) => {
    try {
        const  {idE, nombreRol,  usuario, privilegios  } = req.body;
        let roles = await Roles.findById(req.params.id);

        if(!roles){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        roles.idE = idE;
        roles.nombreRol = nombreRol;
        roles.usuario = usuario;
        roles.privilegios = privilegios;

        roles  = await Roles.findByIdAndUpdate({_id: req.params.id}, roles, { new: true})
        res.json(roles);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRolID = async (req,res) => {

    try {
        let roles  = await Roles.findById(req.params.id);

        if(!roles ){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        
        res.json(roles);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRol = async (req,res) => {

    try {
        let roles = await Roles.findById(req.params.id);

        if(!roles){
            res.status(404).json({msg: 'Rol inexistente'})
        }
        
        await Roles.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Rol eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}