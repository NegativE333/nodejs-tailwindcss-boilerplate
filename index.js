const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
})