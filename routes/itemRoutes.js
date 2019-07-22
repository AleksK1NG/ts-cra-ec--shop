const express = require('express')
const router = express.Router()
// const authMiddleware = require('../middleware/authMiddleware')
const ItemController = require('../controllers/itemController')

router.get('/', ItemController.getAllItems)
router.get('/:id', ItemController.getItemById)
router.get('/category/:id', ItemController.getItemsByCollectionId)

router.post('/', ItemController.createItem)
router.patch('/:id', ItemController.updateItem)
router.delete('/:id', ItemController.deleteItem)

module.exports = router
