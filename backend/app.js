const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require("./routes/book-routes");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/books", router);

mongoose
    .connect("mongodb+srv://admin:68YM0D9irSsbaoTS@cluster0.unohtom.mongodb.net/?retryWrites=true&w=majority", {})
    .then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));




// console.log("HELLO WORLD!");

//68YM0D9irSsbaoTS