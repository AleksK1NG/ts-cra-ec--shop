const Category = require('../models/Category')

module.exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find()

    res.json(allCategories)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    if (!category) return res.status(400).json({ errors: [{ msg: 'No collection with given id' }] })

    res.json(category)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)

    res.status(201).json(newCategory)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(201).json(updatedCategory)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id)

    res.status(201).json({ message: 'Collection has been deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}
