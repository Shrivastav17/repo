import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import repoRoute from './Routes/Repo-Routes.js';
import dbconnection from './database/mongodb.js';
import userRoute from './Routes/user_route.js';

dbconnection()
    .then((res) => {
        console.log("db connected");
        // console.log(res);
    })
    .catch(err => {
        console.log("error", err);
    });

const app = express();

app.use(bodyParser.json());
app.use(express.static('./'));
app.use(cors());
app.use("/repo",repoRoute);
app.use("/user",userRoute);


app.listen(process.env.PORT, () => {
    console.log('app started');

})