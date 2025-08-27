import express, { json } from "express";

const app = express()
app.use(express.json())


app.listen(3000)

/* 
 * CRUD 
 * criar uma rota para pegar todos os usuarios
 * criar uma rota para cadastrar todos os usuarios
 * criar uma rota para deletar um usuario
 * criar uma rota para atualizar
*/

let ultimoId = 1
const usuario_admin = {
    Id: ultimoId++,
    nome: "admin",
    email: "admin@admin"
}

let usuario = {
    id: ultimoId++,
    nome: "",
    email: ""
}

let usuarios = [];

app.get("/usuarios", (req, res) => {
    res.json(usuarios).status(200)
})



app.post("/usuarios/cadastrar", (req, res) => {
    console.log(req.body)
    const {nome, email} = req.body

    
    
    if(!nome || !email ) {
        res.status(400).json("Esta faltando informação!!")
        return;
    } 


    let usuario = {
        id: ultimoId++,
        nome,
        email
    }

    if(usuario(email) in usuarios) {
        res.status(400)
    }

    usuarios.push(usuario)

    return res.status(201).json(`Foi criado o usuario:  ${nome}`)
})