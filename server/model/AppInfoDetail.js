const mongoose = require('mongoose');

const ApplicationInfoDetail = new mongoose.Schema(
    {
        id: {type: String, unique: true, required: true},
        version_name: {type: String, required: true},
        app_id: {type: String, required: true, ref: 'application_info'},
        url: {type: String, required: true},
        remote_url: {type: String, required: false},
        db_server: {type: String, required: false},
        db_name: {type: String, required: false},
        change_intro_method: {type: String, required: false},
        branching_info: {type: String, required: false},
        supported_browser: {type: String, required: false},
        ssis_info: {type: String, required: false},
        others: {type: String, required: false},
        create_uid: {type: String, required: false},
        create_ts: {type: String, required: false},
        update_uid: {type: String, required: false},
        update_ts: {type: String, required: false},
    }, { collection : 'application_info_details' }
)

module.exports = mongoose.model('application_info_details', ApplicationInfoDetail);