const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Hardcoded users for demo purposes
const users = [
  { id: 1, username: "admin", password: "1234" },
  { id: 2, username: "user", password: "1234" },
];

// Passport Local Strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      return done(null, false, { message: "Invalid credentials" });
    }
    return done(null, user);
  })
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user || false);
});
