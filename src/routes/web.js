const express = require('express');
const { getHomepage, getABC, getHuyTran, postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser 
 } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/abd', getABC);
router.get('/tranhuy', getHuyTran);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);




module.exports = router; //export default