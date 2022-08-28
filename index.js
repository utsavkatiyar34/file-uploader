const express = require('express')
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploades');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send("File successfully uploaded");
});

app.listen(7000, () => {
    console.log("Server is running at 7000");
})