const payment = require('./model');
const services = {};

const list = async () => {
    const payments = await payment.find();
    return payments
};

const create = async (paymentInfo) => {
    const result = await payment.create(paymentInfo);
    return result;
};

const update = async (paymentId, updateBody) => {
    const result = await payment.findByIdAndUpdate(paymentId, updateBody, {new: true});
    return result;
};

const remove = async (paymentId) => {
    const result = await payment.findByIdAndDelete(paymentId);
    return result;
};

const existePaymentById = async (id) => {
    const result = await payment.findById(id);
    return result;
};

const existPaymentByPhoneNumber = async (phoneNumber) => {
    const result = await payment.findOne({phoneNumber});
    return result;
};

services.list = list;
services.create = create;
services.existPaymentByPhoneNumber = existPaymentByPhoneNumber;
services.update = update;
services.remove = remove;
services.existePaymentById = existePaymentById;

module.exports = services;