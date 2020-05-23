const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, required: true},
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String},
    lastName: { type: String, required: true },
    birthDay: { type: String, required: true},
    address: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zip: { type: String, required: true},
    permanentAddress: { type: String },
    permanentCity: { type: String },
    permanentZip: { type: String },
    permanentState: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);