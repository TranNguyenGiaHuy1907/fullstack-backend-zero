const connection = require('../config/database');
const {getAllUsers, getUserById, updateUserById} = require('../services/CRUDService')

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
    
    res.send('Created user success!')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id; 
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit: user}); //x <- y
}

const postUpdateUser = async (req, res) => {
    let email = req.body.Email;
    let name = req.body.Myname;
    let city = req.body.City;
    let userId = req.body.Userid;

    await updateUserById (email, name, city, userId);
    
    // res.send('Updated user success!')
    res.redirect('/')
}


module.exports = {
    getHomepage, getABC, getHuyTran,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser,
    
};