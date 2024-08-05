const express = require('express');
const usermsg = require('./controller/usermsg')
const router = express.Router();

router.post('/usermsg',usermsg);

module.exports = router