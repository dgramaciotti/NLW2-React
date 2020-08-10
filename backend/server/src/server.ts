import express from 'express';
import ConnectToDb from './database/dbConnect';
import {getUsers ,postUsers, getTotalConnections, postTotalConnections} from './controllers/httpMethods';
const app = express();
const PORT = 8080;
app.use(express.json());
// Cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
// Routes
// All user basic info
app.post('/user',postUsers);
app.get('/user',getUsers);
// Total conexions
app.post('/connections',postTotalConnections)
app.get('/connections',getTotalConnections)
app.listen(PORT, ConnectToDb);




