module.exports = (sequelize, DataType) => {
  return sequelize.define('Usertoken', {
    id :{
      type :DataType.INTEGER,
      primaryKey: true,
      comment : '고유번호'
    },
     refreshToken : {
       type : DataType.STRING,
       comment : 'token',
     }
  },{
    charset :'utf8', 
    collate: 'utf8_general_ci', 
  })
}