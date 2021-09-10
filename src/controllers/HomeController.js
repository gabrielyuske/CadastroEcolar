import Aluno from "../models/Aluno";

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: "Maria",
            sobrenome: "Sato",
            email: "maria@icloud.com",
            telefone: 11111,
            idade: 22,
            serie: 4,
        });
        res.json(novoAluno);

    }
}

export default new HomeController();
