'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     return queryInterface.addColumn('Contact','email', { 
          id: Sequelize.INTEGER,
          type: Sequelize.STRING,
          allowNull: false
        });
   
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn('Contact', 'email')
  }
};
