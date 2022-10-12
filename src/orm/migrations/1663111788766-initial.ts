import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1663111788766 implements MigrationInterface {
    name = 'initial1663111788766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" ADD "url" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "metrics" DROP CONSTRAINT "FK_c3d911b1d911a990e617041947b"`);
        await queryRunner.query(`ALTER TABLE "metrics" ADD CONSTRAINT "UQ_c3d911b1d911a990e617041947b" UNIQUE ("id_repository")`);
        await queryRunner.query(`ALTER TABLE "metrics" ADD CONSTRAINT "FK_c3d911b1d911a990e617041947b" FOREIGN KEY ("id_repository") REFERENCES "repository"("id_repository") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "metrics" DROP CONSTRAINT "FK_c3d911b1d911a990e617041947b"`);
        await queryRunner.query(`ALTER TABLE "metrics" DROP CONSTRAINT "UQ_c3d911b1d911a990e617041947b"`);
        await queryRunner.query(`ALTER TABLE "metrics" ADD CONSTRAINT "FK_c3d911b1d911a990e617041947b" FOREIGN KEY ("id_repository") REFERENCES "repository"("id_repository") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization" DROP COLUMN "url"`);
    }

}
