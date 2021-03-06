module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sobrenome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telefone: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        idade: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        serie: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },

    }),

    down: (queryInterface) => queryInterface.dropTable('alunos'),

};
