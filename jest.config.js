module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(ts|tsx)?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };