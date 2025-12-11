import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Dummy user for login
const USER = {
  email: "velmurugan2003@gmail.com",
  password: "12345",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  return res.json({ success: false, message: "Invalid email or password" });
});

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
