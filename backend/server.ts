import express = require("express");
import dotenv = require("dotenv");

const authRoutes = require("./routes/auth.routes");
const contactRoutes = require("./routes/contact.routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});