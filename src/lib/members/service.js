const member = require('./model');
const services = {};

const list = async () => {
    const members = await member.find();
    return members
};

const create = async (memberInfo) => {
    const result = await member.create(memberInfo);
    return result;
};

const update = async (memberId, updateBody) => {
    const result = await member.findByIdAndUpdate(memberId, updateBody, {new: true});
    return result;
};

const remove = async (memberId) => {
    const result = await member.findByIdAndDelete(memberId);
    return result;
};

const existeMemberById = async (id) => {
    const result = await member.findById(id);
    return result;
};

const existMemberByPhoneNumber = async (phoneNumber) => {
    const result = await member.findOne({phoneNumber});
    return result;
};

services.list = list;
services.create = create;
services.existMemberByPhoneNumber = existMemberByPhoneNumber;
services.update = update;
services.remove = remove;
services.existeMemberById = existeMemberById;

module.exports = services;