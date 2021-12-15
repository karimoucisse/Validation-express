const express = require('express')
const app = express()
const port = 500

app.listen(port, () => {
    console.log(`serveur is running at port ${port}`);
})
