"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          profession: "Admin Micro",
          role: "admin",
          email: "johndoe@gmail.com",
          password: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Darkness",
          profession: "Full Stack Developer",
          role: "student",
          email: "darkness@gmail.com",
          password: await bcrypt.hash("456789", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
