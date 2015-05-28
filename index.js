//requirements
var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    mongoose = require("mongoose"),
    session = require("express-session"),
    db = require("./models"),
	   app = express();
//config
app.use(bodyParser.urlencoded({extended: true }));
app.use("/assets", express.static("assets"))
var views = path.join(__dirname, "views");

//sessions config!!
app.use(session({
  secret: "SUPER STUFF",
  resave: false,
  saveUninitialized: true
}));

//login/out middleware
app.use("/", function (req, res, next) {
  req.login = function (user) {
    req.session.userId = user._id;
  };
  req.currentUser = function (cb) {
     db.User.
      findOne({
          _id: req.session.userId
      },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }
  next(); 
});
//home page
app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.get("/logout", function(req, res){
    res.send("goodbye!");
    req.logout;
});


app.get("/signup", function (req, res) {
  var signupPath = path.join(views, "signup.html");
  res.sendFile(signupPath);
});


app.post("/users", function (req, res) {
  var newUser = req.body.user;
  console.log(req.body.user);
  db.User.
  createSecure(newUser, function (err, user) {
    if (user) {
      res.send(user);
    } else {
      res.redirect("/signup");
    }
  });
});


app.get("/login", function (req, res) {
  var loginPath = path.join(views, "login.html");

  res.sendFile(loginPath);
})

app.post("/login", function (req, res) {
  var user = req.body.user;

  db.User.
  authenticate(user,
  function (err, user) {
    if (!err) {
      res.redirect("/profile");
    } else {
      res.redirect("/login");
    }
  })
});

app.get("/profile", function (req, res) {
  res.send("COMING SOON");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Running!");
})










