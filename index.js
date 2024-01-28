import express from 'express';
import mongoose from "mongoose";
import routes from "./routes/countryRoutes.js";



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/countries')



app.use('/countries', routes)

app.get('/',(req, res) => {
    res.send('hoi')
});

app.listen(8000)