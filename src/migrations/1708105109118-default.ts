import { MigrationInterface, QueryRunner } from "typeorm";

export class default1708105109118 implements MigrationInterface {
    name = 'default1708105109118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`senha\` text NOT NULL, \`foto\` text NULL, PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`detector\` (\`id_detector\` int NOT NULL AUTO_INCREMENT, \`width\` float NOT NULL, \`heigth\` float NOT NULL, \`x\` float NOT NULL, \`y\` float NOT NULL, \`acertividade\` float NOT NULL, \`classe\` text NOT NULL, \`frame\` text NOT NULL, PRIMARY KEY (\`id_detector\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`detector\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
    }

}
