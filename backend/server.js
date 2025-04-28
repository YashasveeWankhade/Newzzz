
const express = require("express");
const app = express();
const cors = require("cors");

const newsRoutes = require("./routes/news");

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRoutes);

app.listen(5000, () => console.log("Backend server running on port 5000"));
