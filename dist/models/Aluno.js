"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: _sequelize2.default.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Nome precisa ter entre 3 e 255 caracteres.",
                    },
                },
            },
            sobrenome: {
                type: _sequelize2.default.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Sobrenome precisa ter entre 3 e 255 caracteres.",
                    },
                },
            },

            email: {
                type: _sequelize2.default.STRING,
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
                type: _sequelize2.default.INTEGER,
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
                type: _sequelize2.default.INTEGER,
                defaultValue: "",
                validate: {
                    isInt: {

                        msg: "Idade precisa ser um numero inteiro",
                    },
                },
            },
            serie: {
                type: _sequelize2.default.INTEGER,
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
    static associate(models) {
        this.hasMany(models.Foto, {
            foreignKey: "aluno_id"
        });
    }
} exports.default = Aluno;
