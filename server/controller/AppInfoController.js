const ApplicationInfo = require('../model/AppInfo.js');

const getAppInfo = async (req, res) => {
    ApplicationInfo.find({}).
        select({}).
        exec((err, data) => {
            return res.status(200).json(data);
        });
}

const getAppDetail = async (req, res) => {
    const body = req.body;

    ApplicationInfo.findOne({"detail.app_id": body.app_id}).
        select({}).
        exec((err, data) => {
            return res.status(200).json(data);
        });
}

const getVersionDetail = async (req, res) => {
    const body = req.body;

    ApplicationInfo.findOne({"detail.id": body.id}).
        select({
            'detail':0 ,
            'detail.id': 0,
            'detail.branching_info': 0,
            'detail.url': 1
        }).
        exec((err, data) => {
            return res.status(200).json(data);
        });
}

module.exports = {
    getAppInfo,
    getAppDetail,
    getVersionDetail
}