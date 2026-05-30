import dotenv from "dotenv"

dotenv.config()

const requiredVars = ["MONGO_URI", "JWT_SECRET"];
for (const varName of requiredVars) {
  if (!process.env[varName]) {
    throw new Error(`${varName} is not defined in environment variables`);
  }
}

export const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || "1d",
};