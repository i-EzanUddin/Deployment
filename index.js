require("dotenv").config()

const express = require('express')
const all = express()
const port = 4000
const requirePort = process.env.PORT || port

all.get("/",(req,res) => {
    res.send("Welcome to my own server")
})

all.get("/instagram", (req,res) => {
    res.send(`<h1>Welcome to my instagram page</h1>`)
})

all.listen(requirePort,(req,res) =>{
    console.log(`On port ${requirePort}`)
})