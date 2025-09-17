import { Router } from "express";
import { verificarAdm, imprimir } from "../auths.js";
import { listarTodosUsuarios, criarUsuario, deletarUsuario, atualizarUsuario, listarUsuarioId } from "../controller/controller-usuarios.js";

const roteadorUsers = Router();

roteadorUsers.use(imprimir)





roteadorUsers.get("/", (req, res) => {
  listarTodosUsuarios(req, res)
});

roteadorUsers.post("/", verificarAdm,  (req, res) => {
  criarUsuario(req, res)
});

roteadorUsers.delete("/:id", verificarAdm, (req, res) => {
  deletarUsuario(req, res)
});

roteadorUsers.patch("/:id", verificarAdm, (req, res) => {
  atualizarUsuario(req, res)
});

roteadorUsers.get("/:id", (req, res) => {
  listarUsuarioId(req, res)
});

export default roteadorUsers;