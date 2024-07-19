import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class listFrame1721350053848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "ListFrame",
            columns: [
                {name: "id", type: "integer", isPrimary: true, isNullable: false, isGenerated: true},
                {name: "date", type: "varchar", isNullable: false},
                {name: "cover", type: "varchar"}

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ListFrame")
    }

}
