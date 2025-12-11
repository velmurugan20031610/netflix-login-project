const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // IMPORTANT: Parses JSON body

// MOCK USER (for login testing)
const USER = {
  email: "test@gmail.com",
  password: "12345",
};

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!!");
});

// LOGIN route
app.post("/login", (req, res) => {
  console.log("Request Body:", req.body); // DEBUG — see what frontend sends

  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  res.json({ success: false });
});

// Port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
