const fs = require("fs")
const express = require("express");
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.static("public"))
app.use(express.static(__dirname));

const PORT = 25559

function isCC(req) {
    return req.get("User-Agent").startsWith("computercraft")
}

app.get("/",(req,res)=>{
    res.status(200).sendFile("index.html", {root: "public"})
})

// Write time of request
app.get("/uptime/granite", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.granite = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/emeraude", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.emeraude = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/andesite", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.andesite = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/obsidienne", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.obsidienne = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/chorus", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.chorus = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/magma", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.magma = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})
app.get("/uptime/quartz", (req, res) => {
    if (!isCC(req)) {
        res.status(403).send("Not authorized to refresh uptime")
        return
    }
    const reqfile = JSON.parse(fs.readFileSync("./requests.json"))
    reqfile.quartz = new Date().getTime()
    fs.writeFileSync("./requests.json", JSON.stringify(reqfile))
    res.status(200).send("Up-Time Refreshed")
})

app.get("/servers", (req, res) => {
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
    res.set("Access-Control-Allow-Origin","*")
    res.status(200).send(JSON.stringify(resFile))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})