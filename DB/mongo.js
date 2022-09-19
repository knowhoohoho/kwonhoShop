const mongoose = require('mongoose');

mongoose.
        connect(`
mongodb+srv://sosangsosang:UOsgMwrQ0oYLWCWl@cluster0.l8v54yp.mongodb.net/sosangNaver`)
.then(() => console.log('DB 접속완료'))
.catch((err) => {
  console.log(err);
})