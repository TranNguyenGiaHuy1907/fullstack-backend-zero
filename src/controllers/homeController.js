const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDService')

const getHomepage = async (req, res) => {  
    let results = await getAllUsers(); 
    return res.render('home.ejs', {listUsers: results}) 
}
const getABC = (req, res) => {
    res.send('getABC')
}
const getHuyTran = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
    let email = req.body.Email;
    let name = req.body.Myname;
    let city = req.body.City;

    let [results, fields] = await connection.query
    (
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,[email, name, city],
    );
    
    res.send('Created success!')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage, getABC, getHuyTran,
    postCreateUser, getCreatePage
};