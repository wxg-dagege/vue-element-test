const express = require('express');
const app = express();
const port = 3000;

let num = 0;
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send({one: "1485463",two: "123",three: "123",four: "123",five: "123"});
})

app.listen(port, () => {
    console.log("启动成功");
})