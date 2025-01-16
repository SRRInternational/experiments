const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
const { createDomain } = require("domain");
require("./config/passport-config");

const app = express();

// Middleware to serve static files
app.use('/public', express.static(path.join(__dirname, "public")));

// Middleware for parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Session management
app.use(
  session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Domain middleware
app.use((req, res, next) => {
  const domain = createDomain();
  domain.add(req);
  domain.add(res);
  domain.on("error", (err) => {
    console.error("Domain caught an error:", err);
    res.status(500).send("Something went wrong!");
  });
  domain.run(next);
});

// Routes
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

app.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  console.log("User authenticated:", req.user, req.session);
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      throw err; // This will be caught by the domain middleware
    }
    res.sendFile(path.join(__dirname, "views", "logout.html"));
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
