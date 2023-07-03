const fs = require("fs")
const express = require("express");
const app = express()

const PORT = 25559

function getDate() {
    return new Date().getTime()
}

app.get("/", (req, res) => {
    res.status(200).send("FloralStatus-API")
})

// Write time of request
app.get("/uptime/granite", (req, res) => {
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    const currentDate = new Date();
    reqfile.granite = getDate()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
    console.log("up")
})
app.get("/uptime/emeraude", (req, res) => {
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.emeraude = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/andesite", (req, res) => {
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.andesite = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/obsidienne", (req, res) => {
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.obsidienne = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/chorus", (req, res) => {
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.chorus = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/magma", (req, res) => {
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.magma = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})

app.get("/servers", (req, res) => {
    console.log("servers")
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
    for (const [server, value] of Object.entries(reqfile)) {
        const cd = new Date().getTime()
        const milliDiff = cd - value
        if (milliDiff < 300_000) {
            resFile[server] = true
        }
    }
    res.status(200).send(JSON.stringify(resFile))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})