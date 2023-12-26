const CartModel = require("../models/CartModel");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId

const CartListService = async (req) => {
    try {


    }catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}


const SaveCartListService = async (req) => {
    try {



    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}


const RemoveCartListService = async (req) => {
    try {

    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}


module.exports={
    CartListService,
    SaveCartListService,
    RemoveCartListService
}