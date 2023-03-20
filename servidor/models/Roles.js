const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    idE: {
        type: Number,
        required: true
         },
       nombreRol: {
             type: String,
             required: true
         },
         usuario: [{
             type: String,
             required: false
         }],
        privilegios: [{
             type: String,
             required: false
         }],
         fechaCreacion: {
             type: Date,
             default: Date.now()
         }
         },{
         collection:'Roles',
         timestamps: true
     })

     module.exports = mongoose.model('Roles',UsuarioSchema)