const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const itemsRoute = require('./route/item.route')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/items', itemsRoute)

// testing connection and connect for sequelize here
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.listen(port, () => {
    if (process.env.ENV == 'DEV') {
        console.log(`halo ini ada di bagian untuk DEV`)
    } else if (process.env.ENV == 'PROD') {
        console.log(`halo ini ada di bagian untuk PROD`)
    } else {
        console.log(`ENV tidak terbaca`)
    }
    console.log(`BinarAcademy app listening on port ${port}`)
})