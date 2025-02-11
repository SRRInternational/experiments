const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Hardcoded users for demo purposes
const users = [
  { id: 1, username: "admin", password: "1234", email: "admin@example.com", role: "admin" },
  { id: 2, username: "user", password: "1234", email: "user@example.com", role: "user" },
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
  done(null, { id: user.id, username: user.username, email: user.email, role: user.role });
});

// Deserialize user
passport.deserializeUser((user, done) => {
  const foundUser = users.find((u) => u.id === user.id);
  done(null, foundUser || false);
});