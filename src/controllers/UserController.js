import User from "../models/User";

class UserController {
    //create
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
            return res.json(novoUser);
        } catch (e) {
            return res.status(400).json({
                erros: e.errors.map((err) => err.message)
            });
        }
    }

    //index
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    //show
    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            return res.json(user);
        } catch (e) {
            return res.json(null);
        }
    }

    //update
    async update(req, res) {
        try {

            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ["ID nao enviado"],
                });
            }
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(400).json({
                    errors: ["Usuario nao existe"],
                });
            }

            const novosDados = await user.update(req.body);
            return res.json(novosDados);
        } catch (e) {
            return res.status(400).json({
                erros: e.errors.map((err) => err.message),
            });
        }
    }

    //delete
    async delete(req, res) {
        try {

            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ["ID nao enviado"],
                });
            }
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(400).json({
                    errors: ["Usuario nao existe"],
                });
            }

            await user.destroy();
            return res.json(user);
        } catch (e) {
            return res.status(400).json({
                erros: e.errors.map((err) => err.message),
            });
        }
    }

}

export default new UserController();

// index => lista todos os usuarios => GET
// store/create => cria um novo usuario =>POST
// delete => apaga um usuario => DELETE
// show => mostra um usuario => GET
// update => atualiza um usuario => PATCH ou PUT
