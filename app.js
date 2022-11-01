const express = require("express");
const { link } = require("fs");
const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname,"./public")



const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Servidor corriendo en el puerto " + PORT)
});

app.use(express.static(publicPath));
//app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
    //res.send("levantamos el servidor") ===> para mostrar un texto plano en la pagina
});

app.get("/home", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

