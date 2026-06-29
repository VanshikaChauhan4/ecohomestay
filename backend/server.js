require("dotenv").config();
const express = require("express");
const cors = require("cors");

const homestayRoutes = require("./routes/homestayRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// ----- Middleware -----
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  })
);
app.use(express.json());

// ----- Health check -----
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "EcoHomestay API is running" });
});

// ----- Routes -----
app.use("/api/homestays", homestayRoutes);
app.use("/api/bookings", bookingRoutes);

// ----- 404 + error handling (must be registered LAST) -----
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
