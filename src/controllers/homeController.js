const connection = require('../config/database');


const getHomepage = (req, res) => {
    //process date
    //call model
    let users = [];

    connection.query
    (
        'SELECT * FROM Users',
        function (err, result, fields)
        {
            users = result;
            console.log(">>>>result= ",result); 

            // console.log('>> check users: ', users)
            res.send(JSON.stringify(users));
        }
    );
   
}
const getABC = (req, res) => {
    res.send('getABC')
}
const getHuyTran = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC, getHuyTran
};