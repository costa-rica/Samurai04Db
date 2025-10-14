import { User } from "./User";

export function applyAssociations(): void {
	// // --- User associations ---
	// User.hasMany(EntityWhoCategorizedArticle, { foreignKey: "userId" });
	// EntityWhoCategorizedArticle.belongsTo(User, { foreignKey: "userId" });

	// User.hasMany(EntityWhoFoundArticle, { foreignKey: "userId" });
	// EntityWhoFoundArticle.belongsTo(User, { foreignKey: "userId" });

	// User.hasMany(Report, { foreignKey: "userId" });
	// Report.belongsTo(User, { foreignKey: "userId" });

	// User.hasMany(ArticleReviewed, { foreignKey: "userId" });
	// ArticleReviewed.belongsTo(User, { foreignKey: "userId" });

	// User.hasMany(ArticleApproved, { foreignKey: "userId" });
	// ArticleApproved.belongsTo(User, { foreignKey: "userId" });

	// User.hasMany(ArticleIsRelevant, { foreignKey: "userId" });
	// ArticleIsRelevant.belongsTo(User, { foreignKey: "userId" });

	console.log("✅ Associations have been set up");
}
