const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth.js')
const adminRoutes = require('./routes/admin/auth.js')
const categoryRoutes= require('./routes/category')
const productRoutes= require('./routes/product')
const cartRoutes= require('./routes/cart')
const initialDataRoutes= require('./routes/admin/initialData')
const pageRoutes= require('./routes/admin/page')
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoute = require("./routes/admin/order.routes");



const cors= require('cors')

const path=require('path')

//environment variable / constants
env.config();

//mongodb connection
    mongoose.connect(
       `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rutoy.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`).then(() => {
    console.log('Database Connected');
}).catch((error)=>{
    console.log(error)
})

app.use(cors())
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')))
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);







app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})