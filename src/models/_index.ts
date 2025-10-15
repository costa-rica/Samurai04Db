import { sequelize } from "./_connection";

import { initUser, User } from "./User";
import { initUserData, UserData } from "./UserData";
import { initMessage, Message } from "./Message";

import { applyAssociations } from "./_associations";

export function initModels() {
	initUser();
	initUserData();
	initMessage();

	applyAssociations();

	return {
		sequelize,
		User,
		UserData,
		Message,
	};
}

export { sequelize, User, UserData, Message };
