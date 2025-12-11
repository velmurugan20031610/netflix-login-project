const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MOCK USER
const USER = {
  email: "test@gmail.com",
  password: "12345"
};

app.get("/", (req, res) => {
  res.send("Backend is running successfully!!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  res.json({ success: false });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
