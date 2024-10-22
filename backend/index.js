import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log("GET request received at '/'");
    return response.status(200).send('welcome to MERN Tutorial');
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch(() => {
        console.log(error);
    });