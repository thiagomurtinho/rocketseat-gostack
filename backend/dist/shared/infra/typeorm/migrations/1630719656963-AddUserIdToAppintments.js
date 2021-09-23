"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddUserIdToAppintments1630719656963 = void 0;

var _typeorm = require("typeorm");

class AddUserIdToAppintments1630719656963 {
  async up(queryRunner) {
    await queryRunner.addColumn('appointments', new _typeorm.TableColumn({
      name: 'user_id',
      type: 'uuid',
      isNullable: true
    }));
    await queryRunner.createForeignKey('appointments', new _typeorm.TableForeignKey({
      name: 'AppointmentsUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('appointments', 'AppointmentsUser');
    await queryRunner.dropColumn('appointments', 'user_id');
  }

}

exports.AddUserIdToAppintments1630719656963 = AddUserIdToAppintments1630719656963;