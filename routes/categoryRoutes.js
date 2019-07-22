const express = require('express')
const router = express.Router()
// const authMiddleware = require('../middleware/authMiddleware')
const CategoryController = require('../controllers/categoryController')

router.get('/', CategoryController.getAllCategories)
router.get('/:id', CategoryController.getCategoryById)

router.post('/', CategoryController.createCategory)
router.patch('/:id', CategoryController.updateCategory)
router.delete('/:id', CategoryController.deleteCategory)

module.exports = router
