const User = require('../model/user')

//post data
const postUser = async (req,res)=>{
    const {firstName,lastName} = req.body;
     try {
        const user = await User.create({firstName:firstName,lastName:lastName})
        console.log(user.id)
        res.send('inserted')
     } catch (error) {
        console.log(error)
     }
}

//getData

const getData =async(req,res)=>{
    try {
       const user = await User.findAll({}) 
       res.send({user})
    } catch (error) {
        console.log(error)
    }
}

//update data

const updateData = async (req,res)=>{
     try {
        const {firstName} = req.body;
        const {id} = req.params
        const user = await User.update({firstName:firstName},{
          where:{
              id:id
          }
        })
        res.send('data updated')
     } catch (error) {
        console.log(error)
     }
}

//delete data

const deleteData=async (req,res)=>{
     try {
        const {id} = req.params;
        await User.destroy({
            where:{
                id:id
            }
        })
       res.send("deleted successfully") 
     } catch (error) {
        console.log(error)
     }
 }

module.exports = {postUser,getData,updateData,deleteData}