const express = require("express")
const app = express()

const mongoose = require("mongoose")

const UserModel = require('./models/Users')

mongoose.connect("mongodb+srv://user123:Password123Tech@cluster0.v2muv.mongodb.net/socialmedia?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (error, result) => {
        if (error) {
            res.json(error);
        }
        else {
            res.json(result)
        }
    })
})



app.listen(3001, () => {
    console.log("Server is running");
})