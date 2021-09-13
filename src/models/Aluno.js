import Sequelize, { ExclusionConstraintError, Model } from "sequelize";

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: sequelize.STRING,
                default: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Nome precisa ter entre 3 e 255 caracteres.",
                    },
                },
            },
            sobrenome: {
                type: sequelize.STRING,
                default: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Sobrenome precisa ter entre 3 e 255 caracteres.",
                    },
                },
            },

            email: {
                type: sequelize.STRING,
                default: "",
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
                type: sequelize.INTEGER,
                default: "",
                validate: {
                    isInt: {
                        args: [9],
                        msg: "telefone precisa ter 9 digitos",
                    },
                },
            },

            idade: {
                type: sequelize.Integer,
                default: "",
                validate: {
                    isInt: {
                        msg: "Idade precisa ser um numero inteiro",
                    },
                },
            },
            serie: {
                type: sequelize.STRING,
                default: "",
                validate: {
                    isEmail: {
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
