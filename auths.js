export function verificarAdm(req, res, next) {

    const {tipoUser} = req.body;

    if(tipoUser === "adm" && tipoUser) {
        console.log("Rota permitida!")
        next()
    } else {
        console.log("Função não permitida a este usuario")
        return res.status(400).json({mensagem: "Função não permitida a este usuario"})
    } 
    
} 

export function imprimir(req, res, next) {
    console.log("Chamando API!")
    next()
}