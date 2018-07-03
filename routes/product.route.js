const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');
const event_controller = require('../controllers/event.controller');
const eventdetail_controller = require('../controllers/eventdetail.controller');
const eventinfo_controller = require('../controllers/eventinformation.controller');
const login_controller = require('../controllers/login.controller');

router.get('/fetchusers', user_controller.userdetails);
router.get('/fetchevents', event_controller.eventdetails);
router.get('/fetcheventdetails', eventdetail_controller.eventdetail);
router.get('/fetcheventinformation', eventinfo_controller.eventinform);
router.post('/createuser', user_controller.user_create);
router.get('/login',login_controller.login);
router.get('/register',login_controller.register);
router.get('/profile',login_controller.profile);
module.exports = router;