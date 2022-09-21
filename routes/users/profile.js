const router = require('express').Router();


const profile = (req,res) => {
  console.log(req.body);
}



const modifyProfile = (req,res) => {
  console.log(req.body);
}




module.exports = {
  profile,
  modifyProfile

}