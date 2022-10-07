const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server)


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send("hello")
});
app.get("/:room", (req,res) => {
    res.render("room", {roomId: req.params.room});
});

io.on("connection", (socket) =>
console.log("User IO connect") );

server.listen("3000");
