const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const initiateDBConnection = require("./config/db");
const productsRouter = require("./routes/products");
const productManagementRouter = require("./routes/productManagement");
const suppliersRouter = require("./routes/supplier");
const authRouter = require("./routes/auth");
const patientRoutes=require('./routes/patientRoutes')

dotenv.config({
   path: './config/.env'
});
const PORT_NUMBER = process.env.PORT_NUMBER;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productsRouter);
app.use("/productManagement", productManagementRouter);
app.use("/suppliers", suppliersRouter);
app.use("/auth", authRouter);
app.use('/api/patients', patientRoutes);

app.listen(PORT_NUMBER, async () => {
   console.log(`Server Started and listening to port ${PORT_NUMBER}`);
   await initiateDBConnection();
   
});
