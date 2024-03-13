

let mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  restraurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restraurant'
  },
  restaurant_name: {
    type: String
  },
  restaurant_address: {
    type: String
  },
  product_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  name: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'delivered'],
    default: "pending"
  }
});

let Order = mongoose.model('Order', orderSchema);

module.exports = Order;
