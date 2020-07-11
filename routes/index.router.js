const express = require("express");
const router = express.Router();
const jwtHelper = require('../config/jwtHelper');
const ctrUser = require("../controllers/user.controller");
const ctrQuiz = require("../controllers/quiz.controller");
router.post('/register',ctrUser.register);
router.post('/authenticate', ctrUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrUser.userProfile);

router.post('/addquiz',ctrQuiz.addQuiz);
router.get('/allquiz',ctrQuiz.allquiz);


module.exports = router;
