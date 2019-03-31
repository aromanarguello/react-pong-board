module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(ts|tsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: ['jest-dom/extend-expect', 'react-testing-library']
  };