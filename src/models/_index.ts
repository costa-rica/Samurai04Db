import { sequelize } from "./_connection";

import { initUser, User } from "./User";
import { initUserData, UserData } from "./UserData";
import { initMessage, Message } from "./Message";
import { initConversation, Conversation } from "./Conversation";
import { initContractUserConversation, ContractUserConversation } from "./ContractUserConversation";

import { applyAssociations } from "./_associations";

export function initModels() {
	initUser();
	initUserData();
	initMessage();
	initConversation();
	initContractUserConversation();

	applyAssociations();

	return {
		sequelize,
		User,
		UserData,
		Message,
		Conversation,
		ContractUserConversation,
	};
}

export { sequelize, User, UserData, Message, Conversation, ContractUserConversation };
