const { Sequelize } = require("sequelize");


const dbConnect = (database,username,password,host)=>{
       const sequelize = new Sequelize(database,username,password,{
         host:host,
         dialect:"mysql"
       })
       return sequelize;
}

module.exports = dbConnect;







// const {Sequelize} = require('sequelize')

// const dbConnect = (database,username,password,host)=>{
//       const sequelize = new Sequelize(database,username,password,{
//           host:host,
//           dialect:'mysql'
//       })
//       return sequelize;
// }

// module.exports = dbConnect;