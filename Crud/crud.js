const express = require('express');
const Modelusu = require('../Modelos/Post');
const router = express.Router();

// Ruta Post
router.post("/", async(req, res) => {
    const body = req.body;
    const responder = await Modelusu.create(body);
    res.send(responder);
})
//ruta get buscando
router.get("/", async(req, res) => {
    const responder = await Modelusu.find({})
    res.send(responder);
})
//ruta get buscando por el Id
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const responder = await Modelusu.findById(id)
    res.send(responder);
})
//ruta put Actualizar
router.put("/:id", async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    const responder = await Modelusu.findOneAndUpdate({_id:id}, body)
    res.send(responder);
})
//Ruta Delete metodo eliminar un usuario
router.delete("/:id", async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    const responder = await Modelusu.deleteOne({_id:id}, body)
    res.send(responder);
})
// Exportar el enrutador
module.exports = router;