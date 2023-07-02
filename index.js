const functions = require("firebase-functions")
const { getDatabase, ref, set, child, get } = require("firebase/database")
const fs = require("fs")

const express = require("express");
const app = express()

const firebaseConfig = {
    apiKey: "AIzaSyCQ_SY7oRAO0IC7GQseZoTfmps9VwQkIKw",
    authDomain: "modded-status.firebaseapp.com",
    databaseURL: "https://modded-status-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "modded-status",
    storageBucket: "modded-status.appspot.com",
    messagingSenderId: "519884371748",
    appId: "1:519884371748:web:90703d3ffa46a8426ce5b1",
    measurementId: "G-TCV7V3QFCC"
  };

  const dbRef = ref(getDatabase());


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
    get(child(dbRef, `servers`)).then((snapshot) => {
        if (snapshot.exists()) {
            
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
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

exports.app = functions.https.onRequest(app)