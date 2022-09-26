const pool = require('../../DB/db');

let conection; 
const bookMark = async (req,res) => {
  try {
    conection = await pool.getConnection();
    const shopSelet = `selet * from climbing a left join myshop on b  a.id = b.shop.id`
    const shopMain = await conection.query(shopSelet);

    res.json({
      success : true,
      shop : shopMain
    })


  }catch {
 
  }finally {
    if(conection) {
      conection.release();
    }
  }
    

}


module.exports = bookMark;