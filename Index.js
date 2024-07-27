const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

// Middleware
app.use(express.json());

// MongoDB connections for different databases
const customerDb = mongoose.createConnection(process.env.MONGO_CUSTOMER_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const deliveryPartnerDb = mongoose.createConnection(process.env.MONGO_DELIVERYPARTNER_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const farmerDb = mongoose.createConnection(process.env.MONGO_FARMER_URL, { useNewUrlParser: true, useUnifiedTopology: true });

customerDb.on('connected', () => console.log("Customer Database Connected"));
customerDb.on('error', (err) => console.log(err));

deliveryPartnerDb.on('connected', () => console.log("Delivery Partner Database Connected"));
deliveryPartnerDb.on('error', (err) => console.log(err));

farmerDb.on('connected', () => console.log("Farmer Database Connected"));
farmerDb.on('error', (err) => console.log(err));

// Routes
app.use("/api/auth/customers", require("./routes/CustomerAuthantication"));
app.use("/api/customers", require("./routes/CustomerLoginRoutes"));
app.use("/api/auth/farmers", require("./routes/FarmerAuth"));
app.use("/api/farmers", require("./routes/FarmerLoginRoutes"));
app.use("/api/auth/deliverypartners", require("./routes/DeliveryPartnerAuthentication"));
app.use("/api/deliverypartners", require("./routes/DeliveryPartnerLoginRoute"));

app.listen(port, () => {
  console.log(`Server started at Port: ${port}`);
});
