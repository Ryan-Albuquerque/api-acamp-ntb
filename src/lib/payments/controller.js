const services = require("./service");

const controllers = {};

const list = async (req, res) => {
    try {
        const payments = await services.list();
        return res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

const create = async (req, res) => {
    try {
        const payment = req.body;
        const paymentCreated = await services.create(payment);
        return res.status(200).json(paymentCreated);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

const update = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const updateBody = req.body;
    
        const paymentUpdated = await services.update(paymentId, updateBody);
        return res.status(200).json(paymentUpdated);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

const remove = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const paymentRemoved = await services.remove(paymentId);
        return res.status(200).json(paymentRemoved);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

controllers.list = list;
controllers.create = create;
controllers.update = update;
controllers.remove = remove;

module.exports = controllers;