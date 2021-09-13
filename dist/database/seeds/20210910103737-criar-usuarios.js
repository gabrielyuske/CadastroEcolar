"use strict";const bcryptjs = require("bcryptjs");

module.exports = {
    up: async(queryInterface) => {
        queryInterface.bulkInsert(
            "users", [

                {
                    nome: "Luis1",
                    email: "luis@gmail.com ",
                    password_hash: await bcryptjs.hash("123456", 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                }, {
                    nome: "Luis2",
                    email: "luis2@gmail.com ",
                    password_hash: await bcryptjs.hash("123456", 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                }, {
                    nome: "Luis3",
                    email: "luis3@gmail.com ",
                    password_hash: await bcryptjs.hash("123456", 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                }
            ], {});
    },

    down: (e) => {

    }
};
