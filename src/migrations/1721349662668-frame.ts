import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class frame1721349662668 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
            {
                
                name: "Frame",
                columns: [
                    {name: "id", type: "integer", isGenerated: true },
                    {name: "name", type: "varchar", isNullable: false, isPrimary: true},
                    {name: "id_list", type: "integer", isNullable: false},
                    {name: "path", type: "varchar", isNullable: false},
                    {name: "height", type: "real", isNullable: false},
                    {name: "width", type: "real", isNullable: false},
                    
                ],
                foreignKeys: [
                    {
                        name: "fk_list_frame",
                        columnNames: ["id_list"],
                        referencedTableName: "ListFrame",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
            

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Frame")
    }

}
