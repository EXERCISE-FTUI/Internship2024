const chatControllers = require('../controllers/chat.controllers');
const router = require('express').Router();

router.get('/', chatControllers.getMyChats);
router.post('/', chatControllers.createChat);

module.exports = router;