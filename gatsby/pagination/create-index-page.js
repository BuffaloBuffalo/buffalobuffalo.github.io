'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js'),
    context: {}
  });
};
