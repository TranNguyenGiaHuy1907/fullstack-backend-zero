require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body 
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config tample
configViewEngine(app);

//khai bao Routes
app.use('/', webRoutes);

//test connection 


//simple query 
// connection.query(
//   'SELECT * FROM Users',
//   function (err, result, fields){
//     console.log(">>>>result= ",result); 
//   }
// );


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
