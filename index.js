import express from "express";
import roteadorUsers from "./rotas/rota-usuarios.js";
import { verifyUser } from "./middlewares/auths.js";

const app = express();
app.use(express.json());

app.use(verifyUser)

app.use('/usuarios', roteadorUsers) 

app.listen(3000);
