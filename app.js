const express = require('express')
const app = express()
const port = 3000

// importo router dei dessert
const dessertsRouter = require("./routers/posts")

// defianiamo la cartella per i file statici
app.use(express.static('public'));

// proggetto base con rotta "/"
app.get("/", (req, res) => {
    res.send("Server del mio blog")

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
