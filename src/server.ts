import dotenv from "dotenv";
dotenv.config(); // ✅ MUST come before anything uses process.env

import app from "./app";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
