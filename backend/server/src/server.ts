import express from 'express';
import ConnectToDb from './database/dbConnect';
import {
    getUsers ,
    postUsers, 
    getTotalConnections, 
    postTotalConnections, 
    postUserCredentials, 
    userLogin} from './controllers/httpMethods';
import cors from './cors';
const app = express();
const PORT = 8080;
app.use(express.json());
// Cors
app.use(cors);
// Routes
// All user basic info
app.post('/user',postUsers);
app.get('/user',getUsers);
// Total conexions
app.post('/connections',postTotalConnections);
app.get('/connections',getTotalConnections);

//User credentials
app.post('/user_credentials', postUserCredentials);
app.post('/user_credential/login', userLogin);
app.listen(PORT, ConnectToDb);




