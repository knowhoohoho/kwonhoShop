const pool = require('../../DB/db')


let conection ;
const mainHome = async (req,res) => {
  conection = await pool.getConnection();
  
}



module.exports = mainHome