
const getHomepage = (req, res) => {
    //process date
    //call model 
    res.send('Hello World! & nodemon');
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