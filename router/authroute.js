const router = require('express').Router()
const {postUser,getData,updateData,deleteData} = require('../controllers/authconroller')


router.post('/user',postUser)
router.get('/user',getData)
router.put('/user/:id',updateData)
router.delete('/user/:id',deleteData)

module.exports = router;