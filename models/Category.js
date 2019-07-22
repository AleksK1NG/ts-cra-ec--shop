const mongoose = require('mongoose')


const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  routeName: {
    type: String,
    required: [true, 'Title is required']
  },
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Item'
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: { type: Date, default: Date.now }
})




const Category = mongoose.model('Category', collectionSchema)

module.exports = Category