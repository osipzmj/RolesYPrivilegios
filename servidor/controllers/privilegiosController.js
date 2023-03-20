const Privilegios = require ("../models/Privilegios");


exports.obtenerPrivilegios = async (req,res) => {

    try {
        const privilegios = await Privilegios.find();
        res.json(privilegios)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}