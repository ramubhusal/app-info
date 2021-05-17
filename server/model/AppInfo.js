const mongoose = require('mongoose');

const ApplicationInfo = new mongoose.Schema(
    {
        id: {type: Number, unique: true, required: true},
        name: {type: String, required: true},
        detail: {type: Array, required: true},
        create_uid: {type: String, required: true},
        create_ts: {type: String, required: false},
        update_uid: {type: String, required: false},
        update_ts: {type: String, required: false}
    }, { collection : 'application_info' }
)

module.exports = mongoose.model('application_info', ApplicationInfo);