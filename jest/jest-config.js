'use strict';

module.exports = {
  rootDir: '../',
  preset: 'ts-jest',
  transform: {
    '^.+\\.js?$': '<rootDir>/jest/jest-preprocess.js'
  },
  testMatch: ['**/__tests__/**/*.[tj]s', '**/?(*.)test.[tj]s'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/__mocks__/file-mock.js',
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-plugin-utils/(.*)$': [`gatsby-plugin-utils/dist/$1`, `gatsby-plugin-utils/$1`], // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`,
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby)/)'
  ],
  globals: {
    __PATH_PREFIX__: '',
    __BASE_PATH__: '',
  },
  setupFiles: ['<rootDir>/jest/loadershim.js']
};
