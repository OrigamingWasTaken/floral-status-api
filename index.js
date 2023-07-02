const fs = require("fs")
const https = require("https")

const express = require("express");
const app = express()

// Write time of request
app.get("/uptime/granite",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.granite = new Date().getTime()
    fs.writeFileSync("./requests.json",JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/emeraude",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.emeraude = new Date().getTime()
    fs.writeFileSync("./requests.json",JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/andesite",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.andesite = new Date().getTime()
    fs.writeFileSync("./requests.json",JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/obsidienne",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.obsidienne = new Date().getTime()
    fs.writeFileSync("./requests.json",JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/chorus",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.chorus = new Date().getTime()
    fs.writeFileSync("./requests.json",JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/magma",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.magma = new Date().getTime()
    fs.writeFileSync("./requests.json",JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})

app.get("/servers",(req,res)=>{
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    const resFile = {
        "granite": false,
        "magma": false,
        "emeraude": false,
        "chorus": false,
        "obsidienne": false,
        "quartz": false,
        "andesite": false
    }
    for (const server in reqfile) {
        let i = 0
        if ((server - new Date().getTime()) > 240000) {
            resFile[i] = true
            i++
        }   
    }
    res.status(200).send(JSON.stringify(resFile))
})

https.createServer(app).listen(443)