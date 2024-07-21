import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
  email: String,
  name: String,
  number: String,
  country: String,
  city: String,
});

export default mongoose.model('FormData', formDataSchema);
