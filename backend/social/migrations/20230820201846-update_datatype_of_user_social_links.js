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
		await queryInterface.changeColumn('User_Profile', 'social_links', { 
			type: `${Sequelize.JSON()} USING to_jsonb("social_links")`,
			allowNull: true 
		});
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
		await queryInterface.changeColumn('User_Profile', 'social_links', { 
			type: Sequelize.ARRAY(Sequelize.TEXT)
		});
	}
};
