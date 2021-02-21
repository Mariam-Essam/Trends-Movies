const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '/dist/movies-app')));
app.get('/*', async (req, res) =>{
    res.sendFile('index.html',{root:path.join(`${__dirname}/dist/movies-app/index`)})
});
app.listen(process.env.PORT||8000)
