import User from "../models/Aluno";

class TokenController {
    async index(req, res) {
        res.json("OK");
    }
}

export default new TokenController();
