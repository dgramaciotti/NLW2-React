import {Request, Response} from 'express';
import User from '../database/userSchema';
import UserCredential from '../database/userCredentialsSchema';
import fs from 'fs';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const postUsers = (req:Request,res:Response) => {
    const userData = req.body;
    User.findById(userData._id).then((item:any)=>{
        item.name = userData.name;
        item.photoLink = userData.photoLink;
        item.whatsappNumber = userData.whatsappNumber;
        item.biografy = userData.biografy;
        item.class = userData.class;
        item.cost = userData.cost;
        item.availableTimes = userData.availableTimes;
        item.save().then(()=>{res.send('User updated!')})
    })
}

export const getUsers = (req:Request,res:Response) => {
    if( Object.keys(req.query).length ){
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

export const postUserCredentials = async (req:Request,res:Response) => {
    try{
        const pass = req.body.password;
        const id = new mongoose.Types.ObjectId();
        const email = req.body.email;
        //hash the password
        let hashedPass = await bcrypt.hash(pass,10);
        const user = new UserCredential({
            _id:id,
            email: email,
            passHash: hashedPass
        });
        user.save()
        .then(()=>{console.log('User credentials added!')})
        .catch(err=>{console.log(err)});
        //Creating basic user info
        const userInfo = new User({
            _id:id,
            name:req.body.name,
        });
        userInfo.save().then(()=>{console.log('Basic user info added!')});
        res.status(200).send("User added!");
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    }
}

export const userLogin = async (req:Request,res:Response) =>{
   UserCredential.findOne({email:req.body.email}).then(async (userLoginInfo:any) =>{
       if(!userLoginInfo){
            return res.status(400).send("User not found");
       }
       if(await bcrypt.compare(req.body.password,userLoginInfo.passHash)){
           User.findById(userLoginInfo._id).then((userPageInfo)=>{
               res.send(userPageInfo);
           })
       }else{
           res.send("Not allowed");
       }
   })
}