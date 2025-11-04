const express = require('express');
const { getHomepage, getABC, getHuyTran } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/abd', getABC);

router.get('/tranhuy', getHuyTran)


module.exports = router; //export default