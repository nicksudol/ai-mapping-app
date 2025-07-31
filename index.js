const express = require("express");
const cors = require("cors");
const app = express();
const aiRoute = require("./routes/ai");

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
