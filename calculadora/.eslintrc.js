module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: [
        // ...
        'react-hooks',
    ],
    rules: {
        'no-eval': 0,
        'no-alert': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
};
