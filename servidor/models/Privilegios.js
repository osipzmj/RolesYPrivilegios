const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    usuarioAdministrador: [{
        type: String,
        required: true
      
    }],
    usuarioValidador: [{
        type: String,
        required: true
      
    }],
    usuarioEstandar: [{
        type: String,
        required: true
      
    }],

    fechaCreacionPrivilegio: {
        type: Date,
        default: Date.now()
    }
},
{
    collection:'Privilegios',
    timestamps: true
});

module.exports = mongoose.model('Privilegios',UsuarioSchema)