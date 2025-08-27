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
    id: ultimoId++,
    nome: "admin",
    email: "admin@admin"
}



let usuarios = [usuario_admin];

app.get("/usuarios", (req, res) => {
    res.json(usuarios).status(200)
})



app.post("/usuarios/cadastrar", (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ mensagem: "Está faltando informação!" });
    } 

    
    const usuario = {
        id: ultimoId,
        nome,
        email
    };

    
    const existe = usuarios.some(u => u.email === usuario.email);
    if (existe) {
        return res.status(400).json({ mensagem: "Email já cadastrado!" });
    }

    usuario.id = ultimoId++
    
    usuarios.push(usuario);

    return res.status(201).json({ mensagem: `Foi criado o usuário: ${nome}`, usuario });
});

app.delete('/usuario/deletar/:id', (req, res) => {

    const id = req.params.id
    const idNumerico = parseInt(id)

    if(isNaN(idNumerico)) {
        return res.status(400).json({ mensagem: "Não é um ID valido!"})
    } 

    const existe = usuarios.findIndex(u => u.id === idNumerico)

    if(existe === -1) {
        console.log("Este usuario não existe")
        return res.status(400).json("Este usuario não existe!")
    }
    
    
    usuarios.splice(existe, 1)
    return res.status(204).send()
})