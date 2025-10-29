import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String },
  class: { type: String, required: true }, // ✅ Added class field
  createdAt: { type: Date, default: Date.now }
});

const Admission = mongoose.model("Admission", admissionSchema);
export default Admission;
