const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User should provide a name"],
      trim: true,
    },
    mobile: {
      type: String,
      validate: {
        validator: validator.isMobilePhone,
        message: "Invalid phone number.",
      },
      required: [true, "Please provide your mobile number"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: [true, "This email is already registered."],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password should be atleast of 8 characters"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Passwords are not the same",
      },
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    address: {
      type: [
        {
          address: String,
          city: String,
          pincode: Number,
        },
      ],
      required: [true, "Please provide your address"],
    },
    cart: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          require: [true, "A order must belong to a user"],
        },
        quantity: {
          type: Number,
          default: 1,
          require: [true, "A product must have a quantity"],
        },
      },
    ],
    passwordChangedAt: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  //check if password is modified
  if (!this.isModified("password")) return next();
  //hash password
  this.password = await bcrypt.hash(this.password, 12);
  //remove confirm pass
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  //do only if password is modified
  if (!this.isModified("password") || !this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  //subtract 1000 bcoz there could be a time diff between jwt generation and password saving
  next();
});

userSchema.methods.comparePassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return changedTimeStamp > JWTTimeStamp;
  }
  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
