const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Middleware to log requests
app.use((req, res, next) => {
  const logDetails = `Path: ${req.path}, Date: ${new Date().toLocaleDateString()}, Time: ${new Date().toLocaleTimeString()}\n`;
  
  // Write log details to log.txt
  fs.appendFile('log.txt', logDetails, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });
  
  next();
});

// MongoDB connections for different databases
const customerDb = mongoose.createConnection(process.env.MONGO_CUSTOMER_URL);
const deliveryPartnerDb = mongoose.createConnection(process.env.MONGO_DELIVERYPARTNER_URL);
const farmerDb = mongoose.createConnection(process.env.MONGO_FARMER_URL);
const stockDb = mongoose.createConnection(process.env.MONGO_STOCK_URL);
const orderDb = mongoose.createConnection(process.env.MONGO_ORDER_URL); 

customerDb.on('connected', () => console.log("Customer Database Connected"));
customerDb.on('error', (err) => console.log(err));

deliveryPartnerDb.on('connected', () => console.log("Delivery Partner Database Connected"));
deliveryPartnerDb.on('error', (err) => console.log(err));

farmerDb.on('connected', () => console.log("Farmer Database Connected"));
farmerDb.on('error', (err) => console.log(err));

stockDb.on('connected', () => console.log("Stock Database Connected"));
stockDb.on('error', (err) => console.log(err));

orderDb.on('connected', () => console.log("Order Database Connected")); 
orderDb.on('error', (err) => console.log(err));

// Routes
app.use("/api/auth/customers", require("./routes/CustomerAuthantication"));
app.use("/api/customers", require("./routes/CustomerLoginRoutes"));
app.use("/api/auth/farmers", require("./routes/FarmerAuth"));
app.use("/api/farmers", require("./routes/FarmerLoginRoutes"));
app.use("/api/auth/deliverypartners", require("./routes/DeliveryPartnerAuthentication"));
app.use("/api/deliverypartners", require("./routes/DeliveryPartnerLoginRoute"));
app.use("/api/orders", require("./routes/Order_route")); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at Port: ${port}`);
});

