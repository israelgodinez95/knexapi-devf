const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, entonces se ejecuta el controlador homeController.createHome

router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:houseId', homeController.findOneHome) // en la ruta se envia el param con /:nombre_del_param
router.patch('/homes/:houseId', homeController.updateOneHome)
router.delete('/homes/:houseId', homeController.softDeleteOneHome)
router.delete('/homes/destroy/:houseId', homeController.destroyOneHome)

module.exports = router
