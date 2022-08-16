const router = require('express').Router();
const contact_router = require('./contact_router');
const login_router = require('./login_router');
router.use(contact_router);
router.use(login_router);

module.exports = router;