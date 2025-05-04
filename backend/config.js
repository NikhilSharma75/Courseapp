import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51Pgo0LK3VX2gDSK22DOAZVHBvid3jpdcOSD9IaAEeT6RPHByt7ePr5wKh2TNglAaAY5jU96WOFiKKQm9CwNKXug800eXDgXbvI";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};