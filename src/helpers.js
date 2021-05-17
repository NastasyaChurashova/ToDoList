//const {nanoid} = require("nanoid");
import {nanoid} from "nanoid";

const getRandomIdArray = () =>{
    const a = [];

    for (let i=0; i<10; i++){
        a.push(nanoid());
    } 
    return a;
}

const getRandomIdArrayByLength = (length)=>{
    const a = [];

    for (let i=0; i<length; i++){
        a.push(nanoid());
    } 
    return a;
}

//module.exports.getRandomIdArray = getArrayOfRandomIds;
//module.exports = getArrayOfRandomIds;
export {
    getRandomIdArray,
    getRandomIdArrayByLength,
};