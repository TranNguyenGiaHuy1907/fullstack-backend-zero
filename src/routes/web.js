const express = require('express');
const { getHomepage, getABC, getHuyTran, postCreateUser, getCreatePage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/abd', getABC);
router.get('/tranhuy', getHuyTran);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);


module.exports = router; //export default