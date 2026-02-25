import { MigrationInterface, QueryRunner } from "typeorm";

export class Ejemplo11772044716904 implements MigrationInterface {
    name = 'Ejemplo11772044716904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest3" character varying(55) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "juan" character varying(55) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "juan"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest3"`);
    }

}
