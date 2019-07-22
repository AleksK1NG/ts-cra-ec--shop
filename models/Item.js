const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image Url is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: [true, 'Category must belong to a item!']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: { type: Date, default: Date.now }
})




const Item = mongoose.model('Item', itemSchema)

module.exports = Item