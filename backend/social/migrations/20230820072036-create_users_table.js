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
		await queryInterface.createTable('Tenant_Profile', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			tenant_name: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			city: {
				type: Sequelize.STRING
			},
			state: {
				type: Sequelize.STRING
			},
			country: {
				type: Sequelize.STRING
			},
			zip_code: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.STRING
			},
			web_url: {
				type: Sequelize.STRING
			},
		});
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
		await queryInterface.dropTable('Tenant_Profile');
	}
};
