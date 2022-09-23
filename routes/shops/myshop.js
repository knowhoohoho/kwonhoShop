const pool = require('../../DB/db');


let connection
const myShop = async (req,res) => {
  try{
    const {id} = req;
    console.log('userid', id)
    connection = await pool.getConnection();
    await connection.beginTransaction();
    const shopSelect = 'select t_2.shop_name, t_2.shop_num, t_2.shop_address  from user t_1 , myshop t_2 where t_1.id = t_2.id and t_1. id =?';
    const [shopUser] = await connection.query(shopSelect, [id]);
    if(shopUser) {
      res.status(401).json({
        success: false,
        message: 'user not exist'
      })
    }
    return shopUser
  }catch(e) {
    console.log(e)
  } 
}



module.exports = myShop;