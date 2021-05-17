const express = require('express');
const AppInfoController = require('../controller/AppInfoController');
const router = express.Router();

router.get('/get', AppInfoController.getAppInfo);

module.exports = router;