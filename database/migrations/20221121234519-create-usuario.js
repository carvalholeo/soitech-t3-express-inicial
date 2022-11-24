'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.STRING(20)
      },
      usuario: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      estaAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      nivel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: 'Permissoes',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
          // 1 - Apaga usuário se permissão for apagada - CASCADE
          // 2 - Não permite apagar permissão se tiver usuário cadastrado com ela - RESTRICT
          // 3 - Apaga permissão sem mexer no usuário - NO ACTION *
          // 4 - Apaga a permissão e coloca valor padrão no lugar - SET DEFAULT
          // 5 - Apaga a permissão e colocar o valor NULL - SET NULL
        }
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
    await queryInterface.dropTable('Usuarios');
  }
};