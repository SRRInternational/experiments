const express = require('express');
const mongoose = require('mongoose');
const domain = require('domain');

// 🔹 Change this to `true` or `false` to test behavior
const ENABLE_DOMAINS = false; 

console.log(`🔹 Mongoose domainsEnabled is set to: ${ENABLE_DOMAINS}`);

const app = express();
app.use(express.json());

// Connect to MongoDB with `domainsEnabled`
mongoose.connect('mongodb://localhost:27017/domainExperiment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    domainsEnabled: ENABLE_DOMAINS, // 🔹 This controls domain behavior
}).then(() => console.log("✅ MongoDB connected"));

// Define Schema with context tracking
const userSchema = new mongoose.Schema({ 
    name: String,
    domainId: String,
    userId: String
});
const User = mongoose.model('User', userSchema);

// Middleware to create a domain per request when `ENABLE_DOMAINS` is true
app.use((req, res, next) => {
    if (ENABLE_DOMAINS) {
        const reqDomain = domain.create();
        reqDomain.userId = req.body.userId || "123345"; 
        reqDomain.id = `domain-${Date.now()}`; 

        console.log(`🌍 Created domain ID: ${reqDomain.id} for request`);

        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.run(() => {
            process.domain = reqDomain;
            next();
        });
    } else {
        next();
    }
});

// ✅ Route that shows preserved context if `domainsEnabled` is true
app.get('/', async (req, res) => {
    const domainId = process.domain?.id || "N/A";
    const userId = process.domain?.userId || "N/A";

    console.log(`Before DB Call - Domain ID: ${domainId}, User ID: ${userId}`);

    const user = await User.create({ name: "Test User", domainId, userId });

    console.log(`After DB Call - Domain ID: ${domainId}, User ID: ${userId}`);

    res.send(`User created with Domain ID: ${domainId}, User ID: ${userId}`);
});

// ❌ Route where context gets lost if `domainsEnabled` is false
app.get('/context-lost', async (req, res) => {
    console.log(`Before DB Query - Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);

    const user = await User.findOne({ name: "Test User" });

    console.log(`After DB Query - Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);

    res.send(`User fetched. Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);
});

// ❌ Route where context is lost using setTimeout unless `domainsEnabled` is true
app.get('/timeout-test', async (req, res) => {
    console.log(`Before setTimeout - Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);

    setTimeout(async () => {
        console.log(`Inside setTimeout - Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);

        const user = await User.create({ name: "Delayed User", domainId: process.domain?.id, userId: process.domain?.userId });

        console.log(`After DB Call - Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);

        res.send(`User created (delayed) with Domain ID: ${process.domain?.id}, User ID: ${process.domain?.userId}`);
    }, 1000);
});

// Start server
app.listen(9000, () => console.log("🚀 Server running on port 9000"));
