const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the rating schema
const ratingSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order', // Reference to the Order model
    required: true
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

// Create the Rating model
const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
