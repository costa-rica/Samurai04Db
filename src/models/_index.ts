import { sequelize } from "./_connection";

import { initUser, User } from "./User";

import { applyAssociations } from "./_associations";

export function initModels() {
	initUser();

	applyAssociations();

	return {
		sequelize,
		User,
	};
}

export { sequelize, User };
