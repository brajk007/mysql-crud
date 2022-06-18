const { DataTypes } = require("sequelize");

const dbConnect = require('../db/connect')

const sequelize = dbConnect('bkdb','root','banduraj@5','localhost');

const start=async ()=>{
        try {
          await sequelize.authenticate() 
          console.log('connection established successfully')
        } catch (error) {
          console.log('error in connecting'+error)  
        }
}

start()

const User = sequelize.define('bk',{
        firstName:{
           type:DataTypes.STRING,
           allowNull:false
        },
        lastName:{
           type:DataTypes.STRING,
           allowNull:false
        }
})


module.exports = User;