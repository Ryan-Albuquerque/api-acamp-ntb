const routes = require('express').Router();
const controller = require('./controller');
const validator = require('./validator');

routes.get('/members', controller.list);
routes.post('/member', validator.create, controller.create);
routes.patch('/member/:memberId', validator.verifyId, validator.update, controller.update);
routes.delete('/member/:memberId', validator.verifyId, controller.remove);

module.exports = routes;