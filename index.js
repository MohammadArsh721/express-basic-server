const express = require("express");
const app = express();

app.use(express.json());

// Route: GET /
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Home Page" });
});

// Route: GET /about
app.get("/about", (req, res) => {
  res.json({ message: "This is About Page" });
});

// Route: GET /users
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

// Route: POST /message
app.post("/message", (req, res) => {
  const { message } = req.body;
  console.log("Message received:", message);
  res.json({ status: "Message received" });
});

// Route: DELETE /user/:id
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log("Deleted user with ID:", id);
  res.json({ status: `User with ID ${id} deleted` });
});

// Start server on port 5000
app.listen(5000, () => {
  console.log("✅ Server is running on http://localhost:5000");
});
