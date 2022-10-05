module.exports = (sequelize, DataType) => {
    return sequelize.define('Shop', {
       name : {
         type : DataType.STRING,
         allNull :false,
         comment : '가게이름',
       },
       address : {
         type : DataType.STRING,
         comment : "가게주소",
       },
       number : {
         type : DataType.STRING,
         comment : "가게번호"
       },
       openTime : {
         type : DataType.STRING,
         comment : '오픈시간',
       },
       closeTime : {
         type : DataType.STRING,
         comment : "닫는시간"
       },
       price : {
         type : DataType.INTEGER,
         comment : '가격'
       }

    },{
      charset :'utf8',
      collate: 'utf8_general_ci',
    })
}