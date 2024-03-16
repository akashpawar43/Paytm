const express = require("express");
const dotenv = require("dotenv").config();
const handleMongo = require("./db/db");
const cors = require("cors");
const rootRouter = require("./routes/index");
const PORT = process.env.PORT;

// databse is connected
handleMongo();

const app = express();

app.use(cors());
app.use(express.json());

// middleware Routes
app.use("/api/v1", rootRouter);


app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`);
})