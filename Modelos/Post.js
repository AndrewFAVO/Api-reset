const mongoose = require('mongoose');
const post = new mongoose.Schema(
    {
        
        nombre: {
            type:String,
            require: true
        },
        edad: {
            type:Number,
            require: true
        },
        usuario:{
            type:String,
            require: true
        },
        correo: {
            type:String,
            require: true
        },
        contraseña:{
            type: String,
            require: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    });

    const Modelusu = mongoose.model("prueba_base", post);
    module.exports = Modelusu;