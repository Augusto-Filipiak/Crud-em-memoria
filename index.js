import express from "express";
import roteadorUsers from "./rotas/rota-usuarios.js";

const app = express();
app.use(express.json());

app.use('/usuarios', roteadorUsers) 

app.listen(3000);
