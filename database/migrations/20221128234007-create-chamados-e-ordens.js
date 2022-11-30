'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ChamadosEOrdens', {
      id_ordem: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'OrdensDeServicos',
          key: 'id',
          onDelete: 'CASCADE'
        }
      },
      id_servico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Servicos',
          key: 'id',
          onDelete: 'RESTRICT'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ChamadosEOrdens');
  }
};