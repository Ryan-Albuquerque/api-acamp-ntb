const mongoose = require('mongoose');
const validator = require('validator');
const utils = {};

const isValidEmail = (email) =>  validator.isEmail(email);

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

utils.isValidEmail = isValidEmail;
utils.isValidId = isValidId;

module.exports = utils;