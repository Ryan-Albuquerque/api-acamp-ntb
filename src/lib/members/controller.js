const services = require("./service");

const controllers = {};

const list = async (req, res) => {
    try {
        const members = await services.list();
        return res.status(200).json(members);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

const create = async (req, res) => {
    try {
        const member = req.body;
        const memberCreated = await services.create(member);
        return res.status(200).json(memberCreated);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

const update = async (req, res) => {
    try {
        const { memberId } = req.params;
        const updateBody = req.body;
    
        const memberUpdated = await services.update(memberId, updateBody);
        return res.status(200).json(memberUpdated);
    } catch (error) {
        console.error(error);
        return res.status(400).json(error.message);
    }
};

const remove = async (req, res) => {
    try {
        const { memberId } = req.params;
        const memberRemoved = await services.remove(memberId);
        return res.status(200).json(memberRemoved);
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