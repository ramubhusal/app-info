const express = require('express');
const AppInfoController = require('../controller/AppInfoController');
const router = express.Router();

router.get('/get', AppInfoController.getAppInfo);
router.post('/getDetail', AppInfoController.getAppDetail);
router.post('/getVersionDetail', AppInfoController.getVersionDetail);

module.exports = router;