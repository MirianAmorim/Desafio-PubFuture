module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'Desafio-PubFuture/tsconfig.json', // correcting path
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    exclude: [
      'node_modules',
      'test',
      'dist',
      '**/*spec.ts',
      'tweets.ts', // exclude seed file
      'prisma', // exclude prisma directory
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  };