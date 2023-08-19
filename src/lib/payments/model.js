const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    activityId: {
        type: String,
        required: true
    },
    memberId: {
        type: String,
        required: true
    },
    method: {
        type: String,
        enum: ['card', 'pix', 'cash', 'installment'],
        required: true
    },
    responsableId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    installments: {
        
    }
});

const Member = mongoose.model('Member', paymentSchema);

module.exports = Member;

