import Aluno from "../models/Aluno";

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: "Gabriel",
            sobrenome: "Sato",
            email: "gabrielyuskesato@icloud.com",
            telefone: 99999,
            idade: 23,
            serie: 4,
        });
        res.json(novoAluno);

    }
}

export default new HomeController();
