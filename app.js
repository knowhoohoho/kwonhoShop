const express =require('express');
const cors = require('cors')
const morgan = require('morgan');
const app = express();
const {sequelize} = require('./models');
const logger = require('./logging/winston').logger;

require('dotenv').config();

sequelize.sync({force : false})
      .then(() => {
        console.log('db 연결됨')
      })


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
logger.info('ss')

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}


// router 
const router = require('./routes/index.js'); 

app.use('/', router)



const PORT = process.env.LOCAL_HOST || 5000

app.use((err,req,res,next) => {
  const error = err;
  error.status(404).json(err.message);

})



app.listen(PORT, () => {
  console.log(`${PORT}에 온걸 환영!!`);
});