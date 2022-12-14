//Dependencies
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { ObjectId } = require("bson")

const UserSchema = new mongoose.Schema({
  username: {type:String, required: true},
  password: {type: String, required: true},
  email: {type:String, required: true},
  shoppingCart: [
                    {
                        type: ObjectId,
                        type: new Date()
                    }
                ],
  product: [{type: ObjectId}],
  vendor: {type: Boolean},
  customer: {type: Boolean},
  dateCreated: {type: new Date()}
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
}


const User = mongoose.model("User", UserSchema);
module.exports = User;