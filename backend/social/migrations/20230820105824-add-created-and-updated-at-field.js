'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Tenant_Profile', 'createdAt', Sequelize.DATE);
    await queryInterface.addColumn('Tenant_Profile', 'updatedAt', Sequelize.DATE);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Tenant_Profile', 'createdAt');
    await queryInterface.removeColumn('Tenant_Profile', 'updatedAt');
  }
};
