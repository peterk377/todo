const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let i1 = [];
app.get("/", function(req, res){
    res.render("list", {newListItem: i1});
});

app.post("/", function (req,res) {
    i = req.body.n;
    i1.push(i);
    res.redirect("/");
});

app.listen(3000, function () {

    console.log("listening on port 3000")
});
