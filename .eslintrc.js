module.exports = {
	extends: [
		"airbnb-base",
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:prettier/recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".ts"],
			},
		},
	},
	env: {
		jest: true,
		node: true,
	},
	rules: {
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		quotes: ["error", "double"],
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": ["error"],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
	},
};
