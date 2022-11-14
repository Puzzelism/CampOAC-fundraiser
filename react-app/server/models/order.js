// MongoDB / Mongoose order schema
// https://mongoosejs.com/docs/models.html
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for an order should be self explanatory
const OrderSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 100 },
  lastName: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, maxLength: 100 },
  phone: { type: String, required: true, maxLength: 100 },
  pickUp: { type: String, required: true, maxLength: 100 },
  numBags: { type: String, required: true, maxLength: 100 },
  payment: { type: String, required: true, maxLength: 100 },
});

// Export model
module.exports = mongoose.model("Order", OrderSchema);