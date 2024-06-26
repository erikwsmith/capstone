const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    first_name: {type: String, unique: false},
    middle_name: {type: String, unique: false},
    last_name: {type: String, unique: false},
    group_name: {type: String, unique: false},
    full_name: {type: String, unique: false},
    biography: {type: String, unique: false}
}, {
    timestamps: true
}, {
    collection: 'artists'
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;