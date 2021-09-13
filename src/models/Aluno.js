import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Nome precisa ter entre 3 e 255 caracteres.",
                    },
                },
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Sobrenome precisa ter entre 3 e 255 caracteres.",
                    },
                },
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: {
                    msg: "Email ja existe",
                },
                validate: {
                    isEmail: {
                        msg: "Email invalido",
                    },
                },
            },

            telefone: {
                type: Sequelize.INTEGER,
                defaultValue: "",
                validate: {
                    isInt: {
                        len: {
                            args: [9],
                            msg: "telefone precisa ter 9 digitos",
                        }

                    },
                },
            },

            idade: {
                type: Sequelize.INTEGER,
                defaultValue: "",
                validate: {
                    isInt: {

                        msg: "Idade precisa ser um numero inteiro",
                    },
                },
            },
            serie: {
                type: Sequelize.INTEGER,
                defaultValue: "",
                validate: {
                    isInt: {
                        msg: "Serie precisa ser um numero inteiro",
                    },
                },
            },
        }, {
            sequelize,
        });
        return this;
    }
}
