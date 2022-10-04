const pool = require('../../DB/db');



let conection; 
const bookMark = async (req,res) => {
  try {
    conection = await pool.getConnection();
    const user = req.id ;
    conection.query('')




  }catch {
 
  }finally {
    if(conection) {
      conection.release();
    }
  }
    

}


module.exports = bookMark;