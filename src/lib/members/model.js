const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    leaderGA: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;

