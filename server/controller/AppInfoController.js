const ApplicationInfo = require('../model/AppInfo.js');

const getAppInfo = async (req, res) => {
    ApplicationInfo.find({}).
        select({}).
        exec((err, data) => {
            return res.status(200).json(data);
        });
}


module.exports = {
    getAppInfo
}