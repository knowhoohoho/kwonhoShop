const { User, Shop } = require('../../models');


const myShop = async (req,res) => {
  try{
    console.log('qqq')
    const { id } = req;
    console.log(id)

    const aShop = await Shop.findAll({ include:User})
    console.log(aShop)



    const Myshop = await User.findOne({
      where : {id : id},
      include: [{
        model: Shop,
        as : 'shopmodel',
        where :{id :1 , id :1}
      }]
    })
    console.log(Myshop)
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