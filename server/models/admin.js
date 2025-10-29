import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Admin name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Admin email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  phone: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ["admin", "superadmin"],
    default: "admin"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
