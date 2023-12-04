const router = require('express').Router()
const userController = require('../controllers/userController')
router.get('/get',userController.get)
router.post('/add',userController.add)
router.put('/edit',userController.edit)
router.delete('/delete',userController.delete)

module.exports = router