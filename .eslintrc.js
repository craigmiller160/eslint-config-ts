module.exports = {
    overrides: [
        {
            files: [
                '**/*.ts?(x)'
            ],
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended'
            ]
        }
    ]
}
