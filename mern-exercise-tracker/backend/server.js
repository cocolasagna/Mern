const express = require ('express');
//const bodyParser = require('body-parser');
const cors = require ('cors'); 

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(expree.json());

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
});