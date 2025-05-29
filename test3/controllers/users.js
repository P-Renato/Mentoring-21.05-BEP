import express from 'express';
import { v4 as uuidv4 } from 'uuid';

let users = [];


export const getUsers = (req,res)=>{
    console.log(users)
    res.send(users)
}



export const createUser = (req,res) =>{
    console.log('Post route reached!')
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId } // we are adding an id to the user array
    /*
    Or the 3 above can be done like this:
    users.push( { ...user, id: uuidv4() })
    */
    users.push(userWithId);

    res.send(`Post route reached! User with tje name ${user.firstName} added to the database.`)
}



export const getUser = (req,res)=>{
    const { userId } = req.params;
    res.send(userId)

    const foundUser = users.find((user) => user.id === userId );

    console.log(foundUser)
    res.send(foundUser);
}




 export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id )

    res.send(`User with the id ${id} deleted from the database.`)
}



export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id );

    if (firstName) user.firstName = firstName;

    if (lastName)  user.lastName = lastName;

    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`)
}