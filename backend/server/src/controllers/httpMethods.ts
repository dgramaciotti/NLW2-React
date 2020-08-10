import {Request, Response} from 'express';
import User from '../database/userSchema';
import fs from 'fs';

export const postUsers = (req:Request,res:Response) => {
    const userData = req.body;
    const user = new User(userData);
    user.save().then(()=>{console.log('Sucess - POST method')}).catch((err)=>{
        console.log(err);
    });
    res.send('Post Done')
}

export const getUsers = (req:Request,res:Response) => {
    if(Object.keys(req.query).length){
        User.find()
        .where('class').equals(req.query.subject)
        .where('availableTimes.week_day').equals(req.query.week_day)
        .where('availableTimes.from').equals(req.query.time)
        .then((docs)=>{res.send(docs)})
    }else{
        User.find().then((docs)=>{
            res.send(docs);
        })
    }
}

export const getTotalConnections = (req:Request,res:Response)=>{
    fs.readFile(__dirname+'/totalConnections.json', (err, data) => {
        if (err) throw err;
        let numberOfConnections = JSON.parse(data.toString());
        res.send(numberOfConnections);
    });
}

export const postTotalConnections = (req:Request,res:Response)=>{
    fs.readFile(__dirname+'/totalConnections.json', (err, data) => {
        if (err) throw err;
        let numberOfConnections = JSON.parse(data.toString()).totalConnections;
        numberOfConnections = numberOfConnections + 1;
        let object = {totalConnections:numberOfConnections};
        fs.writeFile(__dirname+'/totalConnections.json',JSON.stringify(object),(err)=>{
            if(err){console.log(err)};
        })
        res.send('New connection added!');
    });
}