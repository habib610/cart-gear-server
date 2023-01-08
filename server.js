import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import orderRouter from "./router/orderRouter.js";
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    // we're connected!
    console.log("Database Connected Successfully");
});

const port = process.env.PORT || 4000;

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
});

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => {
    console.log("listening port", port);
});
