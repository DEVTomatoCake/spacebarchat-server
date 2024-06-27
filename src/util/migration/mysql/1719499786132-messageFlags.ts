import { MigrationInterface, QueryRunner } from "typeorm";

export class MessageFlags1719499786132 implements MigrationInterface {
	name = "MessageFlags1719499786132";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE `messages` ADD `poll` text NULL",
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("ALTER TABLE `messages` DROP COLUMN `poll`");
	}
}
