
const express =require("express");
const cors =require("cors");

const app =express();

// Middlewares
app.use(cors());
app.use(express());
app.use(express.json());
// Rutas
const exampleRoutes=require("../src/routers/registros")
app.use("/api", exampleRoutes)

module.exports=app;


