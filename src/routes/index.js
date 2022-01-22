const routes = require('express').Router();

const memberRoutes = require('../lib/members/routes');
const errorHandler = require('./errorHandler');

routes.use(memberRoutes);

routes.use(errorHandler);

module.exports = routes;