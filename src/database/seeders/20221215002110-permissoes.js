"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */
    await queryInterface.bulkInsert(
      "Permissoes",
      [
        {
          nome_permissao: "Administrador",
          administrar_servicos: true,
          alterar_tecnico: true,
          alterar_ordem: true,
          alterar_permissao: true,
          criar_ordem: true,
          encerrar_ordem: true,
          acessar_ordem: true,
          administrar_clientes: true,
          administrar_status_ordens: true,
          administrar_usuarios: true,
          criar_permissoes: true,
          criar_caixa: true,
          ver_caixa: true,
          alterar_caixa: true,
          apagar_caixa: true,
          gerar_relatorios: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
  },
};
