import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1661539387599 implements MigrationInterface {
    name = 'initial1661539387599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "metrics" ("id_repository" SERIAL NOT NULL, "coverage" double precision NOT NULL, "bugs" integer NOT NULL, "vulnerabilities" integer NOT NULL, "hotspots" integer NOT NULL, "code_smells" integer NOT NULL, "create_time" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_c3d911b1d911a990e617041947" UNIQUE ("id_repository"), CONSTRAINT "PK_c3d911b1d911a990e617041947b" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE TABLE "repository" ("id_repository" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "state" character varying(1) NOT NULL DEFAULT 'E', "status" character varying(1) NOT NULL DEFAULT 'A', "create_time" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_tribe" integer, CONSTRAINT "PK_431a174129d882e2c5398a9f420" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE TABLE "tribe" ("id_tribe" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "status" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_organization" integer, CONSTRAINT "PK_c165ed5e52b4e2ff2af9a7d0fb6" PRIMARY KEY ("id_tribe"))`);
        await queryRunner.query(`CREATE TABLE "organization" ("id_organization" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "status" integer NOT NULL, CONSTRAINT "UQ_c21e615583a3ebbb0977452afb0" UNIQUE ("name"), CONSTRAINT "PK_c1137363ad9deea0a4e9c6ff32b" PRIMARY KEY ("id_organization"))`);
        await queryRunner.query(`ALTER TABLE "metrics" ADD CONSTRAINT "FK_c3d911b1d911a990e617041947b" FOREIGN KEY ("id_repository") REFERENCES "repository"("id_repository") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "repository" ADD CONSTRAINT "FK_3572e75b71052040481c022dfdd" FOREIGN KEY ("id_tribe") REFERENCES "tribe"("id_tribe") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tribe" ADD CONSTRAINT "FK_dcdd03e44f28bdf784d43314825" FOREIGN KEY ("id_organization") REFERENCES "organization"("id_organization") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tribe" DROP CONSTRAINT "FK_dcdd03e44f28bdf784d43314825"`);
        await queryRunner.query(`ALTER TABLE "repository" DROP CONSTRAINT "FK_3572e75b71052040481c022dfdd"`);
        await queryRunner.query(`ALTER TABLE "metrics" DROP CONSTRAINT "FK_c3d911b1d911a990e617041947b"`);
        await queryRunner.query(`DROP TABLE "organization"`);
        await queryRunner.query(`DROP TABLE "tribe"`);
        await queryRunner.query(`DROP TABLE "repository"`);
        await queryRunner.query(`DROP TABLE "metrics"`);
    }

}
