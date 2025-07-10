
// llamando a la librería dotenv

import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express"
import cors from "cors" 

dotenv.config(); // llamar el archivo .env
mongoose.connect(process.env.urlbd) // conectar a la base de datos
.then(() => {
    console.log("Conexión chingona a la base de datos")
})
.catch((error) => {
    console.log("Error al conectar a la base de datos", error)
}); //conexion de promesas

