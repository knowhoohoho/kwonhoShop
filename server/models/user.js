module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
   
     nickname : {
       type : DataType.STRING,
       allNull :false,
       comment  : "이름"
     },
     password: {
       type : DataType.STRING,
       comment : "비밀번호",
     },
     email : {
       type : DataType.STRING,
       comment : '이메일',
     }
  },{
    charset :'utf8', 
    collate: 'utf8_general_ci', 
  })
  return User
}