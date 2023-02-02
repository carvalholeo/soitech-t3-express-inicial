'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_permissao: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      administrar_servicos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alterar_tecnico: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alterar_ordem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alterar_permissao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criar_ordem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      encerrar_ordem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      acessar_ordem: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      administrar_clientes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      administrar_status_ordens: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      administrar_usuarios: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criar_permissoes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criar_caixa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      ver_caixa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alterar_caixa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      apagar_caixa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      gerar_relatorios: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissoes');
  }
};