import express, { request, response } from "express";
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

//save book
app.post('/books', async (request, response) =>{
    try{    
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all required field: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body
        };
        const book = await book.create(newBook);
        return response.status(201).send(book);
    } catch (error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
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