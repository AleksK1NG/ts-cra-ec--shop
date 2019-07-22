const Item = require('../models/Item')

module.exports.getAllItems = async (req, res) => {
  try {
    const allItems = await Item.find()

    res.json(allItems)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.getItemsByCollectionId = async (req, res) => {
  try {
    const allItems = await Item.find({ category: req.params.id })

    res.json(allItems)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    if (!item) return res.status(400).json({ errors: [{ msg: 'No item with given id' }] })

    res.json(item)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body)

    res.status(201).json(newItem)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(201).json(item)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndRemove(req.params.id)

    res.status(201).json({ message: 'Item has been deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}
