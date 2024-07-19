import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class detector1721348946407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
            {
                name: "Detector",
                
                columns: [
                    {name: "id", type: "integer",  isPrimary: true, isGenerated: true },
                    {name: "width", type: "real", isNullable: false},
                    {name: "height", type: "real", isNullable: false},
                    {name: "x", type: "real", isNullable: false},
                    {name: "y", type: "real", isNullable: false},
                    {name: "score", type: "real", isNullable: false},
                    {name: "class", type: "text", isNullable: false},
                    {name: "frame", type: "text", isNullable: true},
                ],

                foreignKeys: [
                   {
                    name: "fk_frame_detector",
                    columnNames: ["frame"],
                    referencedTableName: "Frame",
                    referencedColumnNames: ["name"]
                   } 
                ]
            })
            

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Detector")
    }

}
