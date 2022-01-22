const utils = require('../../utils');
const leaders = require('../../utils/leaderGA');
const services = require('./service');

const validator = {}

const create = async (req, res, next) => {
    const member = req.body;

    if(!member.name) 
        return res.status(400).json({message: 'Nome não foi definido'});
    
    if(!member.phoneNumber)
        return res.status(400).json({message: 'Numero de telefone não foi definido'});

    const existMemberByPhoneNumber = await services.existMemberByPhoneNumber(member.phoneNumber);

    if(existMemberByPhoneNumber)
        return res.status(400).json({message: 'Usuário já cadastrado com esse número de telefone'});   

    if(member.phoneNumber.length < 11) 
        return res.status(400).json({message: 'Número de telefone deve estar no formato: 929XXXXXXXX'});

    if(!member.leaderGA) 
        return res.status(400).json({message: 'Líder de GA não foi definido'});

    const existLeader = leaders.filter(el => el == member.leaderGA);

    if(existLeader.length == 0)
        return res.status(400).json({message: 'Líder não existe'});

    if(member.email && utils.isValidEmail(member.email))
       return res.status(400).json({message: 'Email não é válido'});
    
    next();
};

const verifyId = async (req,res,next) => {
    const { memberId } = req.params;

    if(!utils.isValidId(memberId))
        return res.status(400).json({message: 'ID não é válido'});

    const existMemberById = await services.existeMemberById(memberId);

    if(!existMemberById)
        return res.status(400).json({message: 'Membro não existe'});

    next();
};

const update = async (req, res, next) => {
    const updateBody = req.body;

    const existPhoneNumber = await services.existMemberByPhoneNumber(updateBody?.phoneNumber);

    if(existPhoneNumber)
        return res.status(400).json({message: 'Número de telefone já cadastrado.'});   

    if(updateBody?.phoneNumber?.length < 11) 
        return res.status(400).json({message: 'Número de telefone deve estar no formato: 929XXXXXXXX'});

    const existLeader = leaders.filter(el => el == updateBody?.leaderGA);

    if(existLeader?.length == 0)
        return res.status(400).json({message: 'Líder não existe'});

    if(updateBody.email && utils.isValidEmail(updateBody.email))
       return res.status(400).json({message: 'Email não é válido'});
    
    next();
};

validator.create = create;
validator.verifyId = verifyId;
validator.update = update;

module.exports = validator;