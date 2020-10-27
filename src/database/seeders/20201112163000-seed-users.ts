'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
     {
        id: "c10c9340-1859-11eb-adc1-0242ac120002",
        name: 'a',
        email: 'a@a.com',
        password: 'a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d0309e70-1859-11eb-adc1-0242ac120002",
        name: 'Danny',
        email: 'd@d.com',
        password: "d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   
         {
        id: "d66830d2-1859-11eb-adc1-0242ac120002",
        name: 'Stefan',
        email: 's@s.com',
        password: "s",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
