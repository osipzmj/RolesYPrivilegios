const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: 'Sin rol'
    },
    privilegios:{
        type: String,
        default: 'Sin privilegios'
    },
    fechaCreacionUsuario: {
        type: Date,
        default: Date.now()
    }
},
{
    collection:'Usuario',
    timestamps: true
});

module.exports = mongoose.model('Usuario',UsuarioSchema)
