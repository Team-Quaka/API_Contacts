const router = require('express').Router();
const contact_router = require('./contact_router');
const login_router = require('./login_router');
router.use(contact_router);
router.use(login_router);
router.get('/health', (req, res) => res.status(200).send('Server is Up!'));
module.exports = router;