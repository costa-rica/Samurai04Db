# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Samurai04Db is a generic TypeScript Sequelize SQLite database starter template designed to be cloned and reused for different projects. It serves as a standalone database module that can be imported into APIs and other applications requiring database access. The project provides strongly-typed Sequelize models with centralized relationship management.

## Development Commands

**Note**: This project is in early development. TypeScript and build scripts have not yet been configured in package.json.

### Installation

```bash
# Install dependencies
npm install sequelize sqlite3

# TypeScript and build tools need to be added
npm install --save-dev typescript @types/node
```

### Expected build commands (to be configured):

```bash
# Build TypeScript to JavaScript (dist/)
npm run build

# Development mode with file watching
npm run dev

# Clean compiled output
npm run clean
```

## Architecture Overview

### Core Structure

- **Database**: SQLite via Sequelize ORM
- **Models**: Individual TypeScript classes in `src/models/`
- **Entry Point**: `src/index.ts` re-exports all models and utilities from `src/models/_index.ts`
- **Distribution**: Will compile to `dist/` directory (not yet configured)

### Critical Files (Underscore Prefix Pattern)

These core files follow a naming convention with underscore prefixes:

- **`src/models/_connection.ts`**: Database connection singleton and configuration

  - Configures Sequelize with SQLite
  - Uses environment variables: `PATH_DATABASE` (default: ".") and `NAME_DB` (default: "database.sqlite")
  - Disables SQL logging by default

- **`src/models/_index.ts`**: Central model registration and exports

  - Exports `initModels()` function that initializes all models and associations
  - Re-exports all models and the sequelize instance
  - Must call `initModels()` before using any models

- **`src/models/_associations.ts`**: Database relationships and foreign keys
  - Contains `applyAssociations()` function called by `initModels()`
  - Currently has commented examples for User associations
  - All model relationships should be centrally defined here

### Model Structure Pattern

Each model follows this consistent TypeScript pattern:

```typescript
// Define interfaces for type safety
interface ModelAttributes {
	id: number;
	field1: string;
	// ... other fields
}

interface ModelCreationAttributes extends Optional<ModelAttributes, "id"> {}

// Model class with proper typing
export class ModelName
	extends Model<ModelAttributes, ModelCreationAttributes>
	implements ModelAttributes
{
	public id!: number;
	public field1!: string;
	// ... other fields

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

// Init function to define schema
export function initModelName() {
	ModelName.init(
		{
			// Field definitions...
		},
		{
			sequelize,
			modelName: "ModelName",
			tableName: "TableNames",
			timestamps: true, // All models include createdAt/updatedAt
		}
	);
	return ModelName;
}
```

### Adding New Models

When adding a new model:

1. Create `src/models/ModelName.ts` following the pattern above
2. Add `initModelName()` call in `src/models/_index.ts`
3. Export the model and init function from `_index.ts`
4. Add any relationships in `src/models/_associations.ts`

## Usage as Package

This module is designed to be imported into other applications:

```typescript
import { initModels, sequelize, User } from "samurai04db";

// Initialize all models and associations
initModels();

// Sync database (creates tables)
await sequelize.sync();

// Use models
const user = await User.create({
	username: "john",
	email: "john@example.com",
	password: "hashed_password",
});
```

## Key Considerations

- All models automatically include `createdAt` and `updatedAt` timestamps
- Models use TypeScript interfaces for compile-time type safety
- Database location is controlled by environment variables from the consuming application
- The `initModels()` function must be called before using any models
- All model relationships should be defined in `_associations.ts`, not within individual model files
- The User model serves as the reference implementation for creating new models
