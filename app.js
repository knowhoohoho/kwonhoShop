const express =require('express');
const cors = require('cors')
const morgan = require('morgan');
const app = express();



require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



//
const authUser = require('./routes/index.js');
const myShop = require('./routes/shop')

//User login,register
app.use('/auth', authUser);
app.use('/shop', myShop);



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`${PORT}에 온걸 환영!!`);
});