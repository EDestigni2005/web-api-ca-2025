import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

UserSchema.methods.comparePassword = async function (passw) {
  return await bcrypt.compare(passw, this.password);
};

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.pre('save', async function () {
  const saltRounds = 10;

  // only hash if new/changed
  if (!this.isModified('password') && !this.isNew) return;

  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
});




export default mongoose.model('User', UserSchema);
