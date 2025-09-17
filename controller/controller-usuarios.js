    import { PrismaClient } from "@prisma/client";

    let usuarios = []
    let ultimoId = 0

    const prisma = new PrismaClient();

    async function listarTodosUsuarios(req, res) {
        console.log("Cheguei no controller");
        const allUsers = await prisma.users.findMany()
        res.status(200).json(allUsers);
    }



    async function criarUsuario(req, res) {
        const { nome, email, idade } = req.body;

        const novoUsuario = {
        nome: nome,
        email: email,
        idade: idade,
        };

        const criarUser = await prisma.users.create({
            data: novoUsuario
        })
        

        res.status(201).json(criarUser);
    }

    async function deletarUsuario(req, res) {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
        return res
            .status(400)
            .json({ mensagem: "ID inválido, precisa ser um numero" });
        }

        const deletarUser = await prisma.users.delete({
            where: {
                id: id
            }
        })

    
        res.status(204).send(deletarUser);
    }

    

    async function listarUsuarioId(req, res) {
         const id = parseInt(req.params.id)
        const findById = await prisma.users.findUnique({where: {id: id}})

            return res
        .status(200)
        .json(findById);
    }

    async function atualizarUsuario(req, res) {

        const id = parseInt(req.params.id)

        let {nome, email, idade} = req.body;

        const updateUser = await prisma.users.update({
            where: {
                id: id 
            },
            data: {
                nome: nome,
                email:email,
                idade: idade
            }
        })

        return res.send(updateUser)
    }

    export {listarTodosUsuarios, criarUsuario, deletarUsuario,  listarUsuarioId, atualizarUsuario};