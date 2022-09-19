const pool = require('../../DB/db');


let connection;
let queryM ;
exports.myShop = async (data) => {
  try{
    const userId = data;
    console.log('userid', userId)
    connection = await pool.getConnection();
    await connection.beginTransaction();
    queryM = 'select t_2.shop_name, t_2.shop_num, t_2.shop_address  from user t_1 , myshop t_2 where t_1.id = t_2.id and t_1. id =?';
    const [shopUser] = await connection.query(queryM, [userId]);
    console.log(shopUser)
    return shopUser
  }catch(e) {
    console.log(e)
  } 
}


exports.shopRegistration = async (data) => {
  try {
    const { name, address,} = data;
    connection = await pool.getConnection();
    


  }catch (e) {
    console.log(e);
  }
}