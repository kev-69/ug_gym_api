const mongoose = require("mongoose");

// University Schema
const universitySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    medicalCondition: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
    },
    universityId: {
      type: Number,
      required: true,
      unique: true,
    },
    hallOfResidence: {
      type: String,
    },
    department: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    subscription: {
      package: {
        type: String,
        default: null,
      },
      price: {
        type: String,
        default: null,
      },
      startDate: {
        type: Date,
        default: null,
      },
      endDate: {
        type: Date,
        default: null,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
      pendingAt: { 
        type: Date, 
        default: null }
    },
  { timestamps: true }
);

// Public Schema
const publicSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscription: {
    package: {
      type: String,
      default: null,
    },
    price: {
      type: String,
      default: null,
    },
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  pendingAt: { 
    type: Date, 
    default: null }
  },
  { timestamps: true }
);

// Create models
const UniversityUser = mongoose.model("UniversityUser", universitySchema);
const PublicUser = mongoose.model("PublicUser", publicSchema);

// Export models
module.exports = { UniversityUser, PublicUser };