const express = require('express');
const cors = require('cors');
const UserRouter = require('./src/routes/user');

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000);
app.listen(3000, () => { console.log("Server is running on http://localhost:3000"); });

app.get("/", (req, res) => {
    console.log("fun01 working");
    res.send("HI");
});

app.use("/user", UserRouter);


