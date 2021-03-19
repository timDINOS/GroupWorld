import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECT_MONGO_URL = 'mongodb+srv://tchoi123:Nbafinals123@cluster0.ea83s.mongodb.net/myFirstDatabase';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))) 
.catch((error) => console.log('${error} did not connect'));

mongoose.set('useFindAndModify', false);