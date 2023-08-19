const routes = require('express').Router();
const controller = require('./controller');
const validator = require('./validator');

routes.get('/payments', controller.list);
routes.post('/payment', validator.create, controller.create);
routes.patch('/payment/:paymentId', validator.verifyId, validator.update, controller.update);
routes.delete('/payment/:paymentId', validator.verifyId, controller.remove);

module.exports = routes;