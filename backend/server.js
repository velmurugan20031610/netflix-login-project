const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const USER = {
  email: "velmurugan20031610@gmail.com",
  password: "123456",
};

// ✅ test route
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// login api
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
