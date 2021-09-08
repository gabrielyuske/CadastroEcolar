import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            telefone: Sequelize.INTEGER,
            idade: Sequelize.INTEGER,
            serie: Sequelize.INTEGER,
        }, {
            sequelize,
        });
        return this;
    }
}
