const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const cors = require('cors')

app.use(cors())

app.get("/api", (req, res) => {
    res.json({ name: "JJ" })
})

if(process.env.NODE_ENV === "development"){
    app.listen(5000, () => { console.log("Listening to port 5000 Development") })
}else{
    https.createServer({
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem")
    },app).listen(5000, () => { console.log("Listening to port 5000 Production") })
}