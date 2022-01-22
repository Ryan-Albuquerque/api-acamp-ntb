const mongoose = require('mongoose');
const { MONGO_URI } = require('../../config');

module.exports = {
    init: async () => {
        try {
            await mongoose.connect(MONGO_URI);
            console.log('[MongoDB] Database connected');
        } catch (error) {
            console.log('[MongoDB] Failed trying to connect!');
            process.exit();
        }
    }
};