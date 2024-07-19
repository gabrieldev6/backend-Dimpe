import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class users1721331357287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
            {
                name: "Users",
                columns: [
                    {name: "id", type: "integer",  isPrimary: true, isGenerated: true },
                    {name: "name", type: "text", isNullable: false},
                    {name: "email", type: "text", isNullable: false},
                    {name: "password", type: "text", isNullable: false},
                    {name: "photo", type: "text"}

                ]
            })
            

        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }

}
