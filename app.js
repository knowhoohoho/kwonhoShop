const express =require('express');
const cors = require('cors')
const morgan = require('morgan');
const app = express();



require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}


// router 
const router = require('./routes/index.js'); 

app.use('/', router)



const PORT = process.env.PORT || 5000

app.use((err,req,res,next) => {
  const error = err;
  error.status(404).json(err.message);

})



app.listen(PORT, () => {
  console.log(`${PORT}에 온걸 환영!!`);
});