const mongoose = require('mongoose');

// Conexión con el mongooseCompass Instalado. Conectada a la base de datos "prueba_base".
const dbconect = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect("mongodb://localhost:27017/prueba_base", {
    
        });
        console.log("Tu conexion ha sido correcta :D");
    } catch (error) {
        console.log("error al conectar la base datos :(");
    }

}
module.exports = dbconect;