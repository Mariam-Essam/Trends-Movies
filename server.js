// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, '/dist/movies-app')));
// app.get('/*', (req, res) =>{
//     res.sendFile(path.join(`${__dirname}/dist/movies-app/index.html`))
// });
// app.listen(process.env.PORT || 3000);
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 8000;

const root = path.join(__dirname, 'dist', 'movies-app');
app.get('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});
const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));