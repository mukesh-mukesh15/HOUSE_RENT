import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

export const seedAdminUser = async () => {
  const email = "admin@gmail.com";
  const password = "Admin@123";
  const role = "admin";

  try {
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      console.log("Admin user already exists:", email);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword, role });
    await admin.save();
    console.log(`✅ Admin user created: ${email}`);
  } catch (err) {
    console.error("❌ Failed to seed admin user:", err.message);
  }
};
