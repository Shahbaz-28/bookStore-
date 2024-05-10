const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')


const bookRoute = require('./route/book.route.js')
const userRoute = require('./route/user.route.js')

app.use(cors());
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// connect to mongodb

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error", error);
}

// defining routes

app.use("/book", bookRoute)

app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
